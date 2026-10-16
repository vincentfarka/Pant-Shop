"use client";

import { ArrowRight } from "lucide-react";
import { ComponentProps, ReactNode, useContext } from "react";
import MotionDiv from "./div";
import { twMerge } from "tailwind-merge";
import { useLenis } from "lenis/react";

type buttonProps = {
  width?: any;
  height?: any;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  link?: boolean;
  scrollTo?: string;
  fontSize?: number;
} & ComponentProps<"button">;

export default function Button({
  width = 190,
  height = 50,
  children = "button",
  className,
  variant = "primary",
  link = false,
  scrollTo,
  fontSize = 21,
  ...props
}: buttonProps) {
  const variants = link
    ? { initial: { scale: 1, y: 0 }, hover: { scale: 1.05, y: -1 } }
    : { initial: { scale: 1, y: 0 }, hover: { scale: 1.2, y: -4 } };
  const lenis = useLenis();

  const handleScrollTo = (selector: string) => {
    lenis?.scrollTo(selector, { duration: 2 });
  };
  return (
    <MotionDiv
      className={twMerge("w-fit origin-center", className)}
      variants={variants}
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <button
        className={twMerge(
          "bg-secondary rounded-[10px] w-fit h-fit cursor-pointer disabled:bg-secondary/70 group",
          variant === "secondary"
            ? "bg-transparent disabled:bg-transparent ring-2 disabled:ring-secondary/20 ring-secondary"
            : variant === "tertiary"
              ? "bg-primary disabled:bg-primary/70"
              : "",
        )}
        style={{ minWidth: width, minHeight: height }}
        onClick={() => (scrollTo ? handleScrollTo(scrollTo) : null)}
        {...props}
      >
        <h1
          style={{
            fontSize: fontSize,
            marginLeft: width / 4,
            marginRight: width / 4,
            marginTop: height / 4,
            marginBottom: height / 4,
          }}
          className={twMerge(
            "font-normal text-background flex justify-center items-center gap-2",
            variant === "secondary" ? "text-secondary group-disabled:text-secondary/30" : "",
          )}
        >
          {children}
          {link && (
            <MotionDiv
              variants={{ inital: { rotate: 0 }, hover: { rotate: -45 } }}
            >
              <ArrowRight />
            </MotionDiv>
          )}
        </h1>
      </button>
    </MotionDiv>
  );
}
