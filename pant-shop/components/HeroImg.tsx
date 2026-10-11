import { CSSProperties, ReactNode } from "react";
import MotionDiv from "./div";

type heroImgProps = {
  children: ReactNode;
  oneColunm?: boolean;
};

export default function HeroImg({ children, oneColunm }: heroImgProps) {
const style: CSSProperties | undefined = { gridColumn: "1/2", gridRow: "1/2" }
  return (
    <>
      {oneColunm ? (
        <div className="h-full w-full overflow-y-hidden bg-cover" style={style}>
            {children}
        </div>
      ) : (
        <div className="h-full w-full sm:flex hidden items-center justify-center relative">
          <div className="w-full relative h-[90vh] rounded-[10px] overflow-hidden flex items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
