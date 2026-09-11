"use client";

import { motion, HTMLMotionProps } from "motion/react";

type MotionDivProps = {} & HTMLMotionProps<"div">;

export default function MotionDiv({ ...props }: MotionDivProps) {
  return <motion.div {...props} />
}
