import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.REDIS_URL || '',
  token: process.env.REDIS_TOKEN || '',
});

export async function rateLimit(ip: string) {
  const limit = 5; // Number of allowed requests per minute
  const windowMs = 60 * 1000; // 1 minute in milliseconds

  const key = `ratelimit_${ip}`;
  const now = Date.now();

  const pipeline = redis.pipeline();
  pipeline.zadd(key, { score: now, member: now.toString() });
  pipeline.zremrangebyscore(key, 0, now - windowMs);
  pipeline.zcard(key);
  pipeline.expire(key, 60);

  const results = await pipeline.exec();
  const totalRequests = results[2] as number;

  if (totalRequests > limit) {
    return { success: false };
  }

  return { success: true };
}