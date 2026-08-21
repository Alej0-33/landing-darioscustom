"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: React.ReactNode;
}

export function Select({ label, className = "", id, children, ...props }: SelectProps) {
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
      <div className="relative">
        <select
          id={id}
          className={`w-full appearance-none bg-zinc-950 border border-industrial-border focus:border-brand-primary px-4 py-3 pr-10 text-sm text-white rounded outline-none transition-colors cursor-pointer ${className}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}