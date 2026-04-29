import type { ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
  label?: ReactNode;
  title?: ReactNode;
  variant?: 'default' | 'success';
};

export function Card({ children, label, title, variant = 'default' }: CardProps) {
  return (
    <div className={`interactive-card${variant === 'success' ? ' success' : ''}`}>
      {label ? <span className="card-label">{label}</span> : null}
      {title ? <strong>{title}</strong> : null}
      {children}
    </div>
  );
}
