"use client";

import Button from "@/components/Button";
import { PantsContext } from "@/context/PantsProvider";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useContext } from "react";

type pantsProps = {
  params: Promise<{ id: number }>;
};

export default function Pants({ params }: pantsProps) {
  const pants = useContext(PantsContext);
  const { id } = use(params);
  const currentPant = pants?.[id];
  if (currentPant?.size === undefined) {
    return notFound();
  }
  const { name, price, image, description, material, size } = currentPant || {};
  return (
    <>
      <div className="w-screen h-fit min-h-screen flex flex-row-reverse">
        <div className="w-full h-screen sticky top-0 flex items-center justify-center">
          <div className="max-w-[385px] mx-[20px] w-full h-fit flex flex-col gap-[50px] justify-center items-center">
            <div className="w-full h-fit flex flex-col gap-[20px] border-b-3 border-black/20 pb-[20px]">
              <h1 className="w-full h-fit">{name}</h1>
              <h2 className="w-full h-fit text-black/80 flex justify-between">
                <div>{price}</div>
                <div>{size}</div>
              </h2>
              <div className="flex justify-between h-fit w-full text-black/60">
                <h2>material</h2>
                <h2>{material}</h2>
              </div>
            </div>
            <p className="flex flex-col w-full h-fit text-black/70 justify-center items-center">
              {description}
            </p>
            <form action="/api/checkout_sessions" method="POST">
              <Button
                type="submit"
                role="link"
                width={220}
                height={60}
                fontSize={25}
                link
              >
                Checkout
              </Button>
            </form>
          </div>
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
