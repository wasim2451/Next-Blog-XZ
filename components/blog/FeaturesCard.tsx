import React from "react";
import Image from "next/image";

interface FeaturesCardProps {
  icon: string;       // path to icon image (in /public or URL)
  title: string;      // feature title
  description: string; // feature description
}

function FeaturesCard({ icon, title, description }: FeaturesCardProps) {
  return (
    <div
      className="rounded-lg border border-[rgb(var(--border))] 
                 bg-[rgb(var(--card))] p-6  
                 flex flex-col items-start gap-4"
    >
      {/* Icon */}
      <div className="h-[50px] w-[50px] relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Title and Description */}
      <div>
        <h3 className="font-semibold text-[rgb(var(--foreground))] text-lg mb-1">
          {title}
        </h3>
        <p className="text-sm text-[rgb(var(--foreground))]/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard;