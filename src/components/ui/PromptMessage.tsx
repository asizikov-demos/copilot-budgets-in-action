import type { ReactNode } from 'react';

type PromptMessageProps = {
  children: ReactNode;
};

export function PromptMessage({ children }: PromptMessageProps) {
  return <p className="prompt-message">{children}</p>;
}
