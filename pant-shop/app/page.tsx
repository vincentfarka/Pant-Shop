import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { ReactNode } from "react";

const NUM_LOGOS = 5;

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full sm:min-h-screen md:h-screen flex items-center justify-between p-55 md:flex-row sm:flex-col">
          <div className="grow shrink w-full h-full flex items-center justify-center">
            <div className="w-[385px] h-screen flex flex-col gap-[50px] justify-center">
              <h1 className="w-full h-fit">
                Making pants that{" "}
                <span className="text-primary">you want to wear</span>
              </h1>
              <p className="text-black/70 w-full h-fit">
                We make pants that are designed straight from Etienne Farka and
                Liam Grippa, co founders of bblankk[ ].
              </p>
              <Button link>Shop Now</Button>
            </div>
          </div>
          <div className="h-full w-full sm:flex hidden items-center justify-center relative">
            <div className="w-full relative h-[90vh] rounded-[10px] overflow-y-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-[10px] absolute"
              />
            </div>
          </div>
        </div>
        <div className="w-screen h-fit flex justify-between items-center px-[20px] py-[30px] ">
          <GenerateLogos />
        </div>
      </div>
    </>
  );
}

export type logoColor = "primary" | "secondary" | "white";

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
