import React from "react";
import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { Filters } from "@/components/shared/Filters";
import { ProductsGroupList } from "@/components/shared/ProductsGroupList";

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
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Hot dog"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 2,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 3,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 4,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 5,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 6,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 7,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Combo"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 2,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 4,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 5,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                  {
                    id: 61,
                    name: "Spicy hot dog",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11EF0286069492BA911C4D3B3376436C.avif",
                    price: 2,
                    items: [{ price: 2 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default page;
