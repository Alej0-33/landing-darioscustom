"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", id, ...props }: InputProps) {
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
      <input
        id={id}
        /* Inyectamos el aria-label para los agentes de IA (WebMCP) */
        aria-label={props["aria-label"] || label || "Input field"}
        className={`w-full bg-zinc-950 border border-industrial-border focus:border-brand-primary px-4 py-3 text-sm text-white rounded outline-none transition-colors placeholder:text-zinc-600 ${className}`}
        {...props}
      />
    </div>
  );
}