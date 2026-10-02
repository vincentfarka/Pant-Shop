import { ArrowRight, LetterTextIcon } from "lucide-react";
import { ReactNode } from "react";
import MotionDiv from "./div";
import { ClassNameValue, twMerge } from "tailwind-merge";
import Link from "next/link";

type buttonProps = {
  width?: any;
  height?: any;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  link?: boolean;
};

export default function Button({
  width = 190,
  height = 50,
  children = "button",
  className,
  variant = "primary",
  link = false,
}: buttonProps) {
  const variants = link ? { initial: { scale: 1, y: 0 }, hover: { scale: 1.05, y: -1 } } : { initial: { scale: 1, y: 0 }, hover: { scale: 1.2, y: -4 } };
  return (
    <MotionDiv
      className={twMerge("w-fit origin-center", className)}
      variants={variants}
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <button
        className={twMerge("bg-secondary rounded-[10px] w-fit h-fit cursor-pointer", variant === "secondary" ? "bg-transparent ring-2 ring-secondary" : variant === "tertiary" ? "bg-primary" : "")}
        style={{ minWidth: width, minHeight: height }}
      >
        <h1
          style={{
            fontSize: 21,
            marginLeft: width / 4,
            marginRight: width / 4,
            marginTop: height / 4,
            marginBottom: height / 4,
          }}
          className={twMerge("font-normal text-background flex justify-center items-center gap-2", variant === "secondary" ? "text-secondary" : "")}
        >
          {children}
          {link && <MotionDiv
            variants={{ inital: { rotate: 0 }, hover: { rotate: -45 } }}
          >
            <ArrowRight />
          </MotionDiv>}
        </h1>
      </button>
    </MotionDiv>
  );
}
