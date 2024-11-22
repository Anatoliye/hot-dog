import React from "react";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Hand made" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="100"
            min={10}
            max={100}
            defaultValue={100}
          />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { value: "1", text: "Classic Hot Dog" },
          { value: "2", text: "Cheese Hot Dog" },
          { value: "3", text: "Chili Hot Dog" },
          { value: "4", text: "Bacon Hot Dog" },
          { value: "5", text: "Veggie Hot Dog" },
          { value: "6", text: "Spicy Hot Dog" },
          { value: "7", text: "BBQ Hot Dog" },
          { value: "8", text: "Jumbo Hot Dog" },
          { value: "9", text: "Chicago Style Hot Dog" },
          { value: "10", text: "New York Style Hot Dog" },
        ]}
        items={[
          { value: "1", text: "Classic Hot Dog" },
          { value: "2", text: "Cheese Hot Dog" },
          { value: "3", text: "Chili Hot Dog" },
          { value: "4", text: "Bacon Hot Dog" },
          { value: "5", text: "Veggie Hot Dog" },
          { value: "6", text: "Spicy Hot Dog" },
          { value: "7", text: "BBQ Hot Dog" },
          { value: "8", text: "Jumbo Hot Dog" },
          { value: "9", text: "Chicago Style Hot Dog" },
          { value: "10", text: "New York Style Hot Dog" },
        ]}
      />
    </div>
  );
};
