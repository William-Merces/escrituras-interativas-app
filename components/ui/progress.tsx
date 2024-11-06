"use client"

import * as React from "react"

interface ProgressProps {
  value?: number;
  className?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
        {...props}
      >
        <div
          className="h-full bg-blue-500 transition-all duration-200"
          style={{ width: `${value}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };