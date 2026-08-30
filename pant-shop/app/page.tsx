import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="flex flex-col mx-auto my-40 items-center gap-4">
      <h1 className="text-5xl text-primary font-bold">
        Hello World
      </h1>
      <p className="text-muted-foreground text-lg">
        hi hello with hi
      </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button size="lg" className="px-7 py-5 font-semibold">Start Now <ArrowRight className="ml-2" /></Button>
        <p className="text-muted-foreground text-sm">And get more hello</p>
      </div>
    </div>
  );
}
