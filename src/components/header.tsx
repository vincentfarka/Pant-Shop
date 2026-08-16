import { type ReactNode } from "react";
import type { sceneState } from "../App";
import { Button } from "./button";

type HeaderProps = {
  setScene: (value: sceneState) => void;
};

export function Header({ setScene }: HeaderProps) {
  return (
    <header className="bg-zinc-600 min-inline-screen flex items-center justify-between px-5 fixed top-0 right-0 left-0 z-1000 rounded-lg">
      <div
        className="flex gap-2 items-center py-2 hover:cursor-pointer text-base leading-none capsize"
        onClick={() => setScene("home")}
      >
        <h1 className="text-2xl">BBLANK</h1>
        <div className="flex gap-2 text-2xl items-center">
          <h1 className="text-2xl">[</h1>
          <h1 className="text-2xl">]</h1>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-4">
        <Button variant="ghost" onClick={() => setScene("home")}>
          Home
        </Button>
        <Button variant="ghost" onClick={() => setScene("shop")}>
          Shop
        </Button>
        <ChevronTab>Contact Us</ChevronTab>
        <ChevronTab>About Us</ChevronTab>
      </div>
    </header>
  );
}

type ChevronTabProps = {
  children: ReactNode;
};

function ChevronTab({ children }: ChevronTabProps) {
  return (
    <div className="relative group">
      <Button variant="ghost" className="flex flex-row items-center">
        {children}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-6 h-6 transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-180 "
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Button>
      <div className="absolute left-[calc(50%-24px)] -translate-x-1/2 top-10 z-50 bg-amber-900 flex items-center justify-center">
        hi
      </div>
    </div>
  );
}
