"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function TypingAnimation({
  texts,
  duration = 200,
  pauseTime = 800,
  className,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [i, setI] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typingEffect = setInterval(() => {
      if (!isDeleting) {
        if (i < currentText.length) {
          setDisplayedText(currentText.substring(0, i + 1));
          setI((prev) => prev + 1);
        } else {
          clearInterval(typingEffect);
          // Wait for a pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (i > 0) {
          setDisplayedText(currentText.substring(0, i - 1));
          setI((prev) => prev - 1);
        } else {
          clearInterval(typingEffect);
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the first text
          setI(0);
        }
      }
    }, duration);

    // Blink cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 200);

    return () => {
      clearInterval(typingEffect);
      clearInterval(cursorInterval);
    };
  }, [duration, i, textIndex, texts, isDeleting, pauseTime]);

  return (
    <h1
      className={cn(
        "font-display text-center text-lg h-10 dark:text-gray-700 font-mono",
        className
      )}
    >
      {displayedText}
      {showCursor && (
        <span className="inline-block w-1 h-6 bg-black dark:bg-white blink ] tracking-[-0.02em] drop-shadow-sm   "></span>
      )}
    </h1>
  );
}
