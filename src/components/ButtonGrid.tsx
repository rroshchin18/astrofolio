import React from 'react';

interface ButtonProps {
  text: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon = "🎯" }) => (
  <div
    className="inline-flex items-center gap-3 rounded-lg border border-black/15 bg-neutral-100 px-4 py-3 text-left text-sm transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-white/5 dark:hover:text-white"
  >
    <div className="flex size-6 items-center justify-center rounded-md bg-black/10 dark:bg-white/10">
      <span className="text-xs">{icon}</span>
    </div>
    {text}
  </div>
);

export const ButtonGrid = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button text="Articulate" />
      <Button text="Adobe Creative Suite" icon="📱" />
      <Button text="LMS Integration" icon="🔄" />
      <Button text="Training Programs" icon="📚" />
      <Button text="Learning Analytics" icon="📊" />
      <Button text="Content Strategy" icon="📝" />
    </div>
  );
};