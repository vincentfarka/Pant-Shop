import Advantage from "@/components/advantage";
import MotionDiv from "@/components/div";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-4 my-10 items-center">
      <div className=" flex flex-col mx-auto items-center gap-2">
      <div className=" flex flex-col items-center gap-4">
      <h1 className=" text-5xl text-primary font-bold">
        Hello World
      </h1>
      <p className=" text-muted-foreground text-lg">
        hi hello with hi
      </p>
      <div className=" grid grid-cols-2 gap-4">
        <Advantage
        svg={<Camera className="mr-2 text-primary" />}
        header="Lorem Ipsum"
        pharagrah="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
       <Advantage
        svg={<Camera className="text-primary mr-2" />}
        header="Lorem Ipsum"
        pharagrah="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
       <Advantage
        svg={<Camera className="text-primary mr-2" />}
        header="Lorem Ipsum"
        pharagrah="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
       <Advantage
        svg={<Camera className="text-primary font-mo mr-2" />}
        header="Lorem Ipsum"
        pharagrah="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      </div>
      </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link href="/sign-up">
        <MotionDiv whileHover={{ 
        scale: 1.1, 
        backgroundColor: "#000", 
        color: "#fff" 
      }} transition={{type:"spring", stiffness: 1000}}>
        <Button size="lg" className="px-7 py-5 font-semibold">Start Now<ArrowRight className="ml-2" /></Button>
        </MotionDiv>
        </Link>
      </div>
    </div>
  );
}
