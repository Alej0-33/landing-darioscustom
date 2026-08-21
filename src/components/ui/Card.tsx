import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

export function Card({ title, description, icon, image, className = "" }: CardProps) {
  return (
    <div className={`bg-industrial-card border border-industrial-border hover:border-industrial-border-high transition-all duration-300 rounded-md overflow-hidden group ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden bg-zinc-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="text-brand-primary mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2 tracking-wide text-white">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
