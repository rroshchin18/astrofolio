import React, { useState, useEffect } from 'react';

const phrases = [
  "rewires how people think and work.",
  "breaks habits and builds momentum.",
  "accelerates change and sharpens performance.",
  "makes strategy stick.",
  "people want to finish — and can't ignore.",
  "turns complexity into clarity — and clarity into action.",
  "closes the gap between knowledge and execution.",
  "enables bold thinking and everyday decisions.",
  "earns trust, builds fluency, and sparks growth.",
  "creates culture, not just compliance.",
  "shapes systems, not just sessions.",
  "makes expertise accessible and enduring.",
  "creates signal, not noise."
];

export const AnimatedHeader = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-semibold text-black dark:text-white">
      I design learning that{" "}
      <span
        className={`inline-block italic transition-opacity duration-500 bg-yellow-100 rounded px-2 ${
    isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[currentPhraseIndex]}
      </span>
    </h1>
  );
};