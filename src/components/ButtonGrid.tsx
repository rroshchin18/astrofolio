import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-3 rounded-lg border border-black/15 bg-neutral-100 px-4 py-3 text-left text-sm transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"
  >
    <div className="flex size-6 items-center justify-center rounded-md bg-black/10 dark:bg-white/10">
      <span className="text-xs">🎯</span>
    </div>
    {text}
  </a>
);

export const ButtonGrid = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button text="Curriculum Design" href="/projects/curriculum-design" />
      <Button text="E-Learning" href="/projects/e-learning" />
      <Button text="LMS Integration" href="/projects/lms-integration" />
      <Button text="Training Programs" href="/projects/training-programs" />
      <Button text="Learning Analytics" href="/projects/learning-analytics" />
      <Button text="Content Strategy" href="/projects/content-strategy" />
    </div>
  );
};