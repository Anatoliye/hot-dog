import React from "react";
import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { Filters } from "@/components/shared/Filters";
import { ProductCard } from "@/components/shared/ProductCard";

function page() {
  return (
    <>
      <Container className="mt-7">
        <Title text="All Hot Dog" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-8 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">list of product</div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default page;
