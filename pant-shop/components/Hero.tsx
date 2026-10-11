import { ReactNode } from "react";
import MotionDiv from "./div";
import HeroImg from "./HeroImg";
import Button from "./Button";
import HeroText from "./HeroText";

export type reactProps = "button" | "pharagraph" | "header" | "image";

type heroProps = Record<reactProps, ReactNode> & { oneColunm?: boolean };

export default function Hero({
  button,
  pharagraph,
  header,
  image,
  oneColunm = false,
}: heroProps) {
  return (
    <>
      {oneColunm ? (
        <div className="w-full h-screen grid place-items-center grid-cols-1 grid-rows-1">
          <HeroText
            oneColunm={oneColunm}
            header={<>{header}</>}
            pharagraph={<>{pharagraph}</>}
            button={<>{button}</>}
          />
          <HeroImg oneColunm={oneColunm}>{image}</HeroImg>
        </div>
      ) : (
        <div className="w-full sm:min-h-screen md:h-screen flex items-center justify-between gap-20 sm:p-55 md:flex-row sm:flex-col p-7">
          <HeroText
            header={<>{header}</>}
            pharagraph={<>{pharagraph}</>}
            button={<>{button}</>}
          />
          <HeroImg>{image}</HeroImg>
        </div>
      )}
    </>
  );
}
