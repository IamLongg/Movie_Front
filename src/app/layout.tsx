import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PHE Film Boilerplate',
  description:
    'A production-ready Next.js frontend boilerplate with TypeScript, Tailwind, Axios, Zustand, and Zod.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-50 text-slate-950 antialiased">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-950">{children}</body>
    </html>
  );
}
