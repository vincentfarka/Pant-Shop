"use client";

import MotionDiv from "@/components/div";
import Reveal from "@/components/reveal";
import { ArrowBigDown } from "lucide-react";
import {
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 100) {
      blankControls.start("end");
    } else {
      blankControls.start("start");
    }
  });
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const blankControls = useAnimationControls();
  const revealDelay = 0.1;
  return (
    <>
      <div className="w-screen min-h-screen flex justify-center items-center relative">
        <Reveal revealDelay={revealDelay} className="fixed">
          <h1 className="text-5xl whitespace-nowrap overflow-hidden text-primary flex gap-2 px-2 relative">
            <MotionDiv style={{ opacity }}>bblankk</MotionDiv>
            <MotionDiv
              className="flex gap-2 absolute"
              variants={{
                start: { left: "100%", x: "0%" },
                end: { left: "50%", x: "-50%" },
              }}
              initial="start"
              animate={blankControls}
              transition={{ type: "tween", ease:"easeOut", }}
            >
              [<div />]
            </MotionDiv>
          </h1>
        </Reveal>
        <MotionDiv
          style={{ opacity }}
          className="absolute top-[70%] text-2xl text-primary font-light flex gap-2 items-center"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Scroll Down <ArrowBigDown className="" />
        </MotionDiv>
      </div>
      <div className="w-full min-h-[200px]"></div>
    </>
  );
}
