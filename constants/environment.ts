import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const ENV = {
  baseUrl: process.env.BASE_URL || 'http://localhost:8000',
  adminUrl: process.env.ADMIN_URL || 'http://localhost:9000',
} as const;