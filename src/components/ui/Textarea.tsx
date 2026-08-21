"use client";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = "", id, ...props }: TextareaProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`w-full bg-zinc-950 border border-industrial-border focus:border-brand-primary px-4 py-3 text-sm text-white rounded outline-none transition-colors resize-none placeholder:text-zinc-600 ${className}`}
        {...props}
      />
    </div>
  );
}