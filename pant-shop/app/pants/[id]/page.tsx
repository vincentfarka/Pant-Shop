"use client";

import { PantsContext } from "@/context/PantsProvider";
import { use, useContext } from "react";

type pantsProps = {
  params: Promise<{ id: number }>;
};

export default function Pants({ params }: pantsProps) {
  const pants = useContext(PantsContext);
  const { id } = use(params);
  const currentPant = pants?.[id];
  const { name, price, image, description, material } = currentPant || {};
  return (
    <>
      <div className="w-screen h-fit min-h-screen flex">
        <div className="w-full h-screen sticky top-0">
          
        </div>
        <div className="w-full flex-col">
          {image?.map((image, index) => {
            return (
              <img src={image} key={index} className="w-full origin-top" />
            );
          })}
        </div>
      </div>
    </>
  );
}
