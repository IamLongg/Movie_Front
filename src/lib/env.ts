import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url().default('https://jsonplaceholder.typicode.com'),
  NEXT_PUBLIC_APP_NAME: z.string().default('PHE Film Boilerplate'),
});

const rawEnv = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
};

const parsed = envSchema.safeParse(rawEnv);

if (!parsed.success) {
  const formatted = parsed.error.format();
  throw new Error(`Invalid environment variables:\n${JSON.stringify(formatted, null, 2)}`);
}

export const env = parsed.data;
