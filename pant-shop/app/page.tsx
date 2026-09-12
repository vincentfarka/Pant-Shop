import MotionDiv from "@/components/div";
import Reveal from "@/components/reveal";
import { ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { spring } from "motion";

export default function Home() {
  const revealDelay = 0.1;
  return (
    <>
    <div className="w-screen h-screen flex justify-center">
      <Reveal revealDelay={revealDelay} className="fixed top-1/2 left-1/2 -translate-x-1/2">
        <h1 className="text-5xl whitespace-nowrap overflow-hidden text-primary flex gap-2">
          Blank{" "}
          <div className="flex gap-2">
            [<div />]
          </div>
        </h1>
      </Reveal>
      <MotionDiv
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
    <div className="min-h-screen min-w-screen flex items-center justify-center text-7xl font-black"><h1>hi</h1></div>
    </>
  );
}
