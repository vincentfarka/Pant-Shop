"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { twMerge } from "tailwind-merge";

type revealProps = {
  children: ReactNode;
  width?: "fit" | "full";
  revealDelay?: number;
  className?: string;
};

export default function Reveal({ children, width = "fit", revealDelay = 0.1, className }: revealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all",  });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className={twMerge(`relative overflow-x-hidden w-${width}`, className)}
    >
      <div>{children}</div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.3, ease: "easeOut", delay: revealDelay }}
        className="absolute bg-card-foreground z-20 top-0 size-full"
      />
    </div>
  );
}
