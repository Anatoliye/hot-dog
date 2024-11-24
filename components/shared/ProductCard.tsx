import Link from "next/link";
import React from "react";
import { Plus } from "lucide-react";
import { Title } from "./Title";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={cn("border border-black/10 px-3 pb-3 rounded-2xl", className)}
    >
      <Link href="/product/1">
        <div className="flex justify-center items-center p-6 bg-popover rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">Classic, chesse, spicy, chili</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
