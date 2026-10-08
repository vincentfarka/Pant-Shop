import { logoColor } from "@/app/page";
import MotionDiv from "./div";
import Logo from "./Logo";

type bannerProps = {
    startingColor?: Exclude<logoColor, "white">;
    startingAround?: boolean;
}

const NUM_LOGOS = 10;

export default function Banner({ startingColor = "primary", startingAround = false}: bannerProps) {
    return (
        <div className="overflow-hidden w-full mx-auto flex py-7.5">
          <MotionDiv
            className="flex whitespace-nowrap"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="flex gap-20 pr-20">
              <GenerateLogos around={startingAround} color={startingColor} />
            </div>
            <div className="flex gap-20 pr-20">
              <GenerateLogos around={startingAround} color={startingColor} />
            </div>
          </MotionDiv>
        </div>
    )
}

type generateLogoProps = {
  count?: number;
  color?: Exclude<logoColor, "white">;
  around?: boolean;
};


const GenerateLogos = ({
  count = 0,
  color = "primary",
  around = false,
}: generateLogoProps) => {
  if (count === NUM_LOGOS) {
    return <></>;
  }
  const nextColor = color === "primary" ? "secondary" : "primary";

  return (
    <>
      <Logo around={around} color={color} size={48.5} />
      <GenerateLogos count={count + 1} color={nextColor} around={!around} />
    </>
  );
};