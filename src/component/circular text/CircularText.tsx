import type { ReactNode } from "react";
import "./CircularText.css";

interface CircularTextProps {
  children?: ReactNode;
  radius: number;
}

const text = "Loremipsum dolor sit amet, cons";
export default function CircularText({ radius, children }: CircularTextProps) {
  return (
    <div
      className="text-ring"
      style={
        {
          "--total": text.length,
          "--radius": `${radius}px`,
          "--font-size": `${14}px`,
        } as React.CSSProperties
      }
    >
      <span aria-hidden="true">
        {children}
        {text.split("").map((letter, index) => (
            <span
              key={index}
              style={
                {
                  "--index": index,
                } as React.CSSProperties
              }
            >
              {letter}
            </span>
          ))}
      </span>
    </div>
  );
}
