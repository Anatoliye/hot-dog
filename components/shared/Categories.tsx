"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";
interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Hot dog" },
  { id: 2, name: "Combo" },
  { id: 3, name: "Caffee" },
  { id: 4, name: "Drinks" },
  { id: 5, name: "Desser" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => {
        return (
          <a
            href={`/#${name}`}
            key={index}
            className={cn(
              "flex items-center font-bold rounded-2xl px-5 py-2",
              categoryActiveId === id &&
                "bg-white shadow-md shadow-gray-200 text-primary"
            )}
          >
            <button>{name}</button>{" "}
          </a>
        );
      })}
    </div>
  );
};
