"use client";

import React from "react";
import { useSectionInView } from "@/hooks/useSectionInView";

export interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionContainer({
  id,
  title,
  children,
}: SectionContainerProps) {
  const { ref, isInView } = useSectionInView(`#${id}`);

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-10 lg:scroll-mt-24 flex flex-col items-center lg:items-start mb-28 ${
        isInView ? "opacity-100" : "opacity-0"
      } ${
        isInView ? "translate-y-0" : "-translate-y-24"
      } transition-all duration-1000`}
    >
      <div className="flex items-center w-full mb-4">
        <div className="w-full h-px bg-gray-300 mx-2 lg:hidden" />
        <h3 className="text-xl font-medium shrink-0 text-center">{title}</h3>
        <div className="w-full h-px bg-gray-300 mx-2" />
      </div>

      {children}
    </section>
  );
}
