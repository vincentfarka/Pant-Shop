"use client";

import {
  AnimatePresence,
  useAnimationControls,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import MotionDiv from "./div";
import { ReactNode, useState } from "react";
import Reveal from "./reveal";
import { ArrowUpRight, WavesArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
let cards: ReactNode[] = [
  "cool pant",
  "coolesr rla;lfk",
  0,
  <div className="bg-white z-50 size-40" />,
];

type revealDelayType = { revealDelay?: number };

const sectionTrigger1 = 200;
const sectionTrigger2 = 1000;
const sectionTrigger3 = 1500;
const stopSectionTrigger3 = 4000;

type fadingHeaderProps = {
  children?: ReactNode;
} & revealDelayType;

export function FadingHeader({
  children,
  revealDelay = 0.1,
}: fadingHeaderProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, sectionTrigger1], [1, 0]);
  return <MotionDiv style={{ opacity }}>{children}</MotionDiv>;
}

type bracketProps = {} & revealDelayType;

export function Brackets({ revealDelay = 0.1 }: bracketProps) {
  const { scrollY } = useScroll();
  const [insideReveal, setInsideReveal] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= sectionTrigger3) {
      setInsideReveal(true);
      return;
    } else if (latest >= sectionTrigger2) {
      blankControlsEnd.start("big");
      setInsideReveal(true);
    } else if (latest >= sectionTrigger1 - 40) {
      blankControlsEnd.start("end");
    } else {
      blankControlsEnd.start("start");
    }
    setInsideReveal(false);
  });
  const scrollYTrigger1 = useTransform(
    scrollY,
    [sectionTrigger3, stopSectionTrigger3],
    [0, 1],
  );
  const blankControlsEnd = useAnimationControls();
  const x = useTransform(scrollYTrigger1, [0, 1], ["50%", "-50%"]);
  return (
    <MotionDiv
      className="flex absolute items-center justify-center w-fit h-screen overflow-hidden"
      variants={{
        start: {
          left: "60%",
          x: "-50%",
          opacity: 0,
          gap: "calc(0vw + 8px)",
          fontSize: "var(--text-5xl)",
        },
        end: {
          left: "50%",
          x: "-50%",
          opacity: 1,
          gap: "calc(0vw + 8px)",
          fontSize: "var(--text-5xl)",
        },
        big: {
          left: "50%",
          x: "-50%",
          opacity: 1,
          gap: "calc(90vw + 0px)",
          fontSize: "var(--text-9xl)",
        },
      }}
      initial="start"
      animate={blankControlsEnd}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      style={{ minHeight: "100vh" }}
    >
      [
      <MotionDiv
        className="absolute h-full flex items-center overflow-hidden"
        style={{ width: "calc(100% - var(--text-9xl))" }}
      >
        <div className="absolute flex items-center justify-center left-0 w-fit">
          <AnimatePresence>
            {insideReveal && (
              <MotionDiv
                className="absolute flex justify-center items-center gap-4 w-fit pl-10"
                style={{ x }}
              >
                {cards.map((value, id) => {
                  return (
                    <Card revealDelay={revealDelay} key={id}>
                      {value}
                    </Card>
                  );
                })}
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </MotionDiv>
      ]
    </MotionDiv>
  );
}

type cardProps = {
  children?: ReactNode;
} & revealDelayType;

function Card({ children, revealDelay = 0.1 }: cardProps) {
  return (
    <MotionDiv
      variants={{
        start: { width: 400, height: 400, opacity: 0 },
        end: { width: 450, height: 450, opacity: 1 },
      }}
      initial="start"
      animate="end"
      exit="start"
      transition={{
        type: "spring",
        opacity: { type: "tween", ease: "easeInOut" },
      }}
      className="flex items-center justify-center bg-linear-to-br from-indigo-800 to-violet-800 text-primary text-5xl"
    >
      {children}
    </MotionDiv>
  );
}

type scrollIndicatorProps = {} & revealDelayType;

export function ScrollIndicator({ revealDelay = 0.1 }: scrollIndicatorProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, sectionTrigger1], [1, 0]);
  return (
    <MotionDiv
      style={{ opacity }}
      className="absolute top-[70%] text-2xl text-primary font-light"
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Reveal revealDelay={revealDelay}>
        <div className="flex gap-2 items-center">
          Scroll Down <WavesArrowDown />
        </div>
      </Reveal>
    </MotionDiv>
  );
}

type shopNowPageProps = {} & revealDelayType;

export function ShopNowPage({ revealDelay = 0.1 }: shopNowPageProps) {
  const sectionTrigger4 = useMotionTemplate`calc(${4000}px + 100vh - 100px)`;
  return (
    <MotionDiv
      className="absolute w-screen h-screen bg-linear-to-b from-background to-[#264653] z-100 flex flex-col items-center justify-center"
      style={{ top: sectionTrigger4 }}
    >
      <div className="flex flex-col text-9xl text-white items-center justify-center gap-80">
        <Reveal revealDelay={revealDelay}>
          <h1 className="overflow-hidden">Get cool pants</h1>
        </Reveal>
        <Link href="/buy">
          <MotionDiv
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.2, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="p-0 m-0"
          >
            <Button className="px-10 py-15 text-7xl text-black rounded-2xl">
              Shop Now <ArrowUpRight className="size-20" />
            </Button>
          </MotionDiv>
        </Link>
      </div>
    </MotionDiv>
  );
}
