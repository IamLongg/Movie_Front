interface CardProps {
  title: string;
  body: string;
  footer?: string;
}

export function Card({ title, body, footer }: CardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
      {footer ? <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-400">{footer}</p> : null}
    </article>
  );
}
