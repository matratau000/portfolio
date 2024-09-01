import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Define the database connection configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false // You might need this for RDS connections
  }
};

// Create a connection pool
const pool = new Pool(dbConfig);

// Function to get a client from the pool
export const getClient = async () => {
  const client = await pool.connect();
  return client;
};

// Function to execute a query
export const query = async (text: string, params?: any[]) => {
  const client = await getClient();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

// Function to execute a transaction
export const transaction = async (callback: (client: any) => Promise<void>) => {
  const client = await getClient();
  try {
    await client.query('BEGIN');
    await callback(client);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

// Example function to test the connection
export const testConnection = async () => {
  try {
    const result = await query('SELECT NOW()');
    console.log('Database connection successful. Current time:', result.rows[0].now);
    return true;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return false;
  }
};

// Close the pool when the application shuts down
process.on('SIGINT', () => {
  pool.end().then(() => {
    console.log('Database pool has ended');
    process.exit(0);
  });
});
