"use client";

import MotionDiv from "@/components/div";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, WavesArrowDown } from "lucide-react";
import {
  AnimatePresence,
  useAnimationControls,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

export default function Home() {
  const cards: ReactNode[] = [
    "cool pant",
    "coolesr rla;lfk",
    0,
    <div className="bg-white z-50 size-40" />,
  ];
  const sectionTrigger1 = 200;
  const sectionTrigger2 = 1000;
  const sectionTrigger3 = 1500;
  const stopSectionTrigger3 = 4000;
  const sectionTrigger4 = useMotionTemplate`calc(${4000}px + 100vh - 100px)`;
  const { scrollY } = useScroll();
  const scrollYTrigger1 = useTransform(
    scrollY,
    [sectionTrigger3, stopSectionTrigger3],
    [0, 1],
  );
  const x = useTransform(scrollYTrigger1, [0, 1], ["50%", "-50%"]);
  // const x = useMotionTemplate`calc((100% - (50% + var(--text-9xl))) * ${scrollYTrigger1}  + (50% + var(--text-9xl)))`;
  // const x = useMotionTemplate`calc((100% - (50% + var(--text-9xl))) * (${progressPercent} / 100) + (50% + var(--text-9xl)))`;
  const [value, setValue] = useState(0);
  const [insideReveal, setInsideReveal] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest);
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
  const opacity = useTransform(scrollY, [0, sectionTrigger1], [1, 0]);
  const blankControlsEnd = useAnimationControls();
  const revealDelay = 0.5;
  return (
    <>
      <div className="min-w-screen min-h-screen flex justify-center items-center relative">
        <div className="flex justify-center items-center fixed h-fit w-full">
          <Reveal revealDelay={revealDelay}>
            <h1 className="text-5xl whitespace-nowrap h-fit w-full text-primary overflow-hidden">
              <MotionDiv style={{ opacity }}>bblankk</MotionDiv>
            </h1>
          </Reveal>
          <div className="flex absolute items-center justify-center w-full h-fit">
            <div className="flex relative items-center justify-center w-full h-fit">
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
                            return <Card key={id}>{value}</Card>;
                          })}
                        </MotionDiv>
                      )}
                    </AnimatePresence>
                  </div>
                </MotionDiv>
                ]
              </MotionDiv>
            </div>
          </div>
        </div>
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
      </div>
      <MotionDiv
        className="absolute w-screen h-screen bg-linear-to-b from-background to-[#264653] z-100 flex flex-col items-center justify-center"
        style={{ top: sectionTrigger4 }}
      >
        <div className="flex flex-col text-9xl text-white items-center justify-center gap-80">
          <h1 className="">Get cool pants</h1>
          <Link href="/sign-up">
          <MotionDiv initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.5, y: -20 }} transition={{ type: "spring", stiffness: 200,  }}>
          <Button className="px-10 py-15 text-7xl text-black rounded-2xl">
            Shop Now <ArrowUpRight className="size-20" />
          </Button>
          </MotionDiv>
          </Link>
        </div>
      </MotionDiv>
    </>
  );
}

type cardProps = {
  children?: ReactNode;
};

function Card({ children }: cardProps) {
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
