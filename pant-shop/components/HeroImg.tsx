
import { ReactNode } from "react";
import MotionDiv from "./div";

type heroImgProps = {
    children: ReactNode
}

export default function HeroImg({ children }: heroImgProps) {
    return (
        <div className="h-full w-full sm:flex hidden items-center justify-center relative">
            <div className="w-full relative h-[90vh] rounded-[10px] overflow-hidden flex items-center justify-center">
              {children}
            </div>
          </div>
    )
}