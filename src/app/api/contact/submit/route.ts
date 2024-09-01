import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

// Define a schema for input validation
const contactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  message: z.string().min(10).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.ip ?? '127.0.0.1';
    const { success } = await rateLimit(ip);
    if (!success) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    // Parse and validate the request body
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { name, email, message } = result.data;

    // Insert data into the database
    const insertQuery = `
      INSERT INTO public.contacts (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id
    `;

    const values = [name, email, message];
    const res = await query(insertQuery, values);

    return NextResponse.json({ success: true, id: res.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
