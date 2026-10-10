import { ReactNode } from "react";
import { reactProps } from "./Hero";

type heroTextProps = Record<Exclude<reactProps, "image">, ReactNode>


export default function HeroText({ header, pharagraph, button}: heroTextProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[385px] w-full h-screen flex flex-col gap-[50px] justify-center sm:items-start items-center">
        {header}
        {pharagraph}
        {button}
      </div>
    </div>
  );
}
