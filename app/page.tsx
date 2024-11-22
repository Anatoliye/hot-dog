import React from "react";
import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";

function page() {
  return (
    <>
      <Container className="mt-7">
        <Title text="All Hot Dog" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}

export default page;
