import MotionDiv from "@/components/div";
import { ReactNode } from "react";

export default function signUp() {
  return (
    <>
     <div className="w-screen h-screen">
      <div className="w-full h-full flex">
        <div className="flex-1 relative">
          <div className="fixed h-screen w-[50%]">

          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-full flex flex-col justify-center">
            <div className="mx-auto my-10 w-[50%]">
              <div className="mb-6 flex justify-between">
                <h1 className="text-2xl">Lorem Ipsum</h1>
                <span className="text-primary/50">$500.50</span>
              </div>
              <div className="border-t-2 border-muted">

              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
