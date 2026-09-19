"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { forwardRef } from "react";

type MotionDivProps = {} & HTMLMotionProps<"div">;

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(({ ...props }, ref) => {
  return <motion.div ref={ref} {...props} />;
});

MotionDiv.displayName = "MotionDiv";

export default MotionDiv

