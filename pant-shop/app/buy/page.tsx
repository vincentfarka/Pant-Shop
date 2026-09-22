"use client";

import MotionDiv from "@/components/div";
import { animate } from "motion";
import { useMotionTemplate, useMotionValue, useTime, useTransform } from "motion/react";
import { useEffect } from "react";

export default function signUp() {
  const colorTurn = useMotionValue(0)
  useEffect(() => {
    animate(colorTurn, 1, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse"
    })
  }, [colorTurn])
  const color = useTransform(
    colorTurn,
    [ 0, 1 ],
    ["#264653", "#3d2653"],
    { clamp: false }
  );
  const background = useMotionTemplate`linear-gradient(to top right, var(--background), ${color}, var(--background))`
  return (
    <>
      <MotionDiv
        className="flex flex-col w-screen min-h-screen py-10 items-center"
        style={{ background }}
      >
        <h1 className="text-9xl text-white mix-blend-difference">Shop for...</h1>
      </MotionDiv>
    </>
  );
}
