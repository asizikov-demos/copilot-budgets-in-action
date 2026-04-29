import type { ReactNode } from 'react';

export type TutorialSlide = {
  slug: string;
  name: string;
  number: number;
  eyebrow: string;
  title: string;
  content: ReactNode;
};
