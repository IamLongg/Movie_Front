import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900';

  const variantStyles =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-950 hover:bg-slate-50'
      : 'bg-slate-950 text-white hover:bg-slate-800';

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}
