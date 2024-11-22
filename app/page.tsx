import { Categories } from "@/components/shared/Categories";
import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import React from "react";

function page() {
  return (
    <>
      <Container className="mt-7">
        <Title text="All Hot Dog" size="lg" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}

export default page;
