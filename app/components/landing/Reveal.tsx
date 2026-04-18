"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "fade";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "li";
  direction?: Direction;
  delay?: number;
  className?: string;
}

const hiddenStates: Record<Direction, string> = {
  up: "translate-y-7",
  left: "-translate-x-9",
  right: "translate-x-9",
  fade: "",
};

export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const liRef = useRef<HTMLLIElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = as === "li" ? liRef.current : divRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(element);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [as]);

  const revealClassName = cn(
    "transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
    isVisible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hiddenStates[direction]}`,
    className,
  );
  const revealStyle = { transitionDelay: `${delay}s` };

  if (as === "li") {
    return (
      <li ref={liRef} className={revealClassName} style={revealStyle}>
        {children}
      </li>
    );
  }

  return (
    <div ref={divRef} className={revealClassName} style={revealStyle}>
      {children}
    </div>
  );
}
