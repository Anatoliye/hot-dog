import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* {Left side} */}

        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="logo" width={60} height={60} />
            <div>
              <h1 className="text-2xl uppercase font-black">Hot Dog</h1>
            </div>
          </div>
        </Link>

        {/* Right Side  */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1">
            <User size={16} />
            Sign in
          </Button>

          <div>
            <Button className="group relative">
              <b>10 $</b>
              <span className="h-full w-[1px] bg-white/30 mx-1" />
              <div className="flex items-center transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>1</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
