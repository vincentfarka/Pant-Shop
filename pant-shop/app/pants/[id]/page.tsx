"use client";

import { PantsContext } from "@/context/PantsProvider";
import { use, useContext } from "react";

type pantCheckoutProps = {
  params: Promise<{ id: number }>;
};

export default function pantCheckout({ params }: pantCheckoutProps) {
  const pants = useContext(PantsContext);
  const { id } = use(params);
  const currentPant = pants?.[id];
  const { name, price, image, description, material } = currentPant || {}
  return <h1 className="m-auto">{price} {material} {name} {image} {description}</h1>;
}
