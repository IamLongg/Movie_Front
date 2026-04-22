'use client';

import { useMemo } from 'react';
import { fetchPosts } from '@/lib/services/example';
import { useFetch } from '@/hooks/useFetch';
import { useAuthStore } from '@/store/auth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/card';

export default function HomePage() {
  const { user, login, logout } = useAuthStore();
  const fetcher = useMemo(() => () => fetchPosts(), []);
  const { data: posts, loading, error } = useFetch(fetcher);

  console.log(posts, 'sasa');

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10 lg:px-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Next.js App Router Boilerplate
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Clean frontend starter with TypeScript, Tailwind, Axios, Zustand, and Zod.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              This example demonstrates a reusable API client, global auth store, loading and error
              state, and environment validation using Zod.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {user ? (
              <Button variant="secondary" onClick={logout}>
                Sign out
              </Button>
            ) : (
              <Button
                onClick={() =>
                  login({
                    id: 'user-1',
                    name: 'Ava Patterson',
                    email: 'ava.patterson@example.com',
                  })
                }
              >
                Sign in demo user
              </Button>
            )}
          </div>
        </div>

        {user ? (
          <div className="mt-6 rounded-3xl bg-slate-950/5 p-5 text-slate-700">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Authenticated</p>
            <p className="mt-3 text-base leading-7">
              Signed in as <span className="font-semibold text-slate-900">{user.name}</span> (
              {user.email})
            </p>
          </div>
        ) : (
          <div className="mt-6 rounded-3xl bg-slate-950/5 p-5 text-slate-700">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Guest mode</p>
            <p className="mt-3 text-base leading-7">
              Click on the button above to simulate login and demonstrate the Zustand auth store.
            </p>
          </div>
        )}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
          <h2 className="text-xl font-semibold text-slate-950">API Fetch Example</h2>
          <p className="text-slate-600">
            This page loads sample posts from the configured API base URL and displays them with
            loading and error handling.
          </p>
          {loading && <p className="text-slate-500">Loading posts…</p>}
          {error && <p className="rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">{error}</p>}
          {!loading && !error && posts?.length === 0 && (
            <p className="text-slate-500">No posts available yet.</p>
          )}
        </div>

        <div className="grid gap-4">
          {posts?.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              body={post.body}
              footer={`Post ID: ${post.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
