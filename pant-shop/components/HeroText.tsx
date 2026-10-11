import { CSSProperties, ReactNode } from "react";
import { reactProps } from "./Hero";

type heroTextProps = Record<Exclude<reactProps, "image">, ReactNode> & {
  oneColunm?: boolean;
};

export default function HeroText({
  header,
  pharagraph,
  button,
  oneColunm = false,
}: heroTextProps) {
  const style: CSSProperties | undefined = oneColunm
    ? { gridColumn: "1/2", gridRow: "1/2" }
    : {};
  return (
    <div
      className="w-full h-full flex items-center justify-center z-100"
      style={style}
    >
      <div className="max-w-[385px] w-full h-fit flex flex-col gap-[50px] justify-center sm:items-start items-center relative">
        {header}
        {pharagraph}
        {button}
        {oneColunm && <div className="bg-black/10 size-[130%] right-1/2 translate-x-1/2 absolute -z-1 rounded-2xl backdrop-blur-sm"></div>}
      </div>
    </div>
  );
}
