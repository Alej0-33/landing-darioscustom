"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 font-semibold uppercase tracking-wider text-[11px] font-sans transition-all duration-300 rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer";
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-hover text-white shadow-lg shadow-brand-primary/15 border border-brand-primary",
    secondary: "bg-industrial-card hover:bg-[#1f1f23] text-zinc-300 hover:text-white border border-industrial-border-high",
    outline: "border border-brand-light text-brand-light hover:bg-brand-primary hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}