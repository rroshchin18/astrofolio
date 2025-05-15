```tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-sm border border-black/15 bg-neutral-100 px-4 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"
  >
    {text}
  </button>
);

export const ButtonGrid = () => {
  const handleClick = (text: string) => {
    alert(`Clicked ${text}`);
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <Button text="Curriculum Design" onClick={() => handleClick("Curriculum Design")} />
      <Button text="E-Learning" onClick={() => handleClick("E-Learning")} />
      <Button text="LMS Integration" onClick={() => handleClick("LMS Integration")} />
      <Button text="Training Programs" onClick={() => handleClick("Training Programs")} />
      <Button text="Learning Analytics" onClick={() => handleClick("Learning Analytics")} />
      <Button text="Content Strategy" onClick={() => handleClick("Content Strategy")} />
    </div>
  );
};
```