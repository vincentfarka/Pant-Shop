"use client";

import MotionDiv from "@/components/div";
import Reveal from "@/components/reveal";
import { WavesArrowDown } from "lucide-react";
import {
  AnimatePresence,
  useAnimationControls,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ReactNode, useState, useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const cards = [0, 0, 0, 0];
  const sectiontrigger1 = 200;
  const sectiontrigger2 = 1000;
  const sectiontrigger3 = 1500;
  const { scrollY } = useScroll();
  const scrollYPercent = useTransform(scrollY, [sectiontrigger3, 2000], [0, 1]);
  const x = useTransform(scrollYPercent, [0, 1], ["50%", "-50%"]);
  // const x = useMotionTemplate`calc((100% - (50% + var(--text-9xl))) * ${scrollYPercent}  + (50% + var(--text-9xl)))`;
  // const x = useMotionTemplate`calc((100% - (50% + var(--text-9xl))) * (${progressPercent} / 100) + (50% + var(--text-9xl)))`;
  const [value, setValue] = useState(0);
  const [insideReveal, setInsideReveal] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest);
    if (latest >= sectiontrigger3) {
      setInsideReveal(true);
      return;
    } else if (latest >= sectiontrigger2) {
      blankControlsEnd.start("big");
      setInsideReveal(true);
    } else if (latest >= sectiontrigger1 - 40) {
      blankControlsEnd.start("end");
    } else {
      blankControlsEnd.start("start");
    }
    setInsideReveal(false);
  });
  const opacity = useTransform(scrollY, [0, sectiontrigger1], [1, 0]);
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
                <MotionDiv className="absolute h-full flex items-center overflow-hidden" style={{ width: "calc(100% - var(--text-9xl))" }}>
                  <div className="absolute flex items-center justify-center left-0 w-fit">
                    <AnimatePresence>
                      {insideReveal && (
                        <MotionDiv
                          className="absolute flex justify-center items-center gap-4 w-fit"
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
          className="absolute bg-amber-900 size-20"
          style={{ top: sectiontrigger3 }}
        />

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
      <MotionDiv style={{ width: "100%", height: "1000vh" }}></MotionDiv>
      <h1 className="w-screen h-fit py-5 flex items-center justify-center text-7xl text-muted">
        scroll up
      </h1>
    </>
  );
}

type cardProps = {
  children?: ReactNode;
  duration?: number;
};

function Card({ children, duration }: cardProps) {
  return (
    <MotionDiv
      variants={{
        start: { width: 100, height: 100, opacity: 0 },
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
