import { twMerge } from "tailwind-merge";
import type { sceneState } from "../App";
import { useRef, type ReactNode } from "react";

type contentProps = {
  scene: sceneState;
};

export type shopItem = {
  src: string;
  name: string;
  price: string;
};

export function Content({ scene }: contentProps) {
  const homeHeader = "BBLA/NKK [ ]";
  const imgRef = useRef(null);
  const sorces = [
    {
      src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiClDMFMdObttV25PkoDA4dyRVaykPffpfuRhrX1MJ1mLe16EGTe_EDHGI-x_J3leY-QThV7IjnSxRhZF4296fe0MK0r4U5JsDMlRRLbMYsXat30OCG4FgGWhFQwrMzBOGzEi45gg&usqp=CAc",
      name: "cool pants",
      price: "$50",
    },
  ] satisfies shopItem[];
  const scenes = {
    shop: (
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-10">
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
        <ShopItem
          price={sorces[0].price}
          name={sorces[0].name}
          src={sorces[0].src}
        />
      </div>
    ),
    home: (
      <div>
        <h1 className="flex items-center fixed bottom-7/10 left-1/2 -translate-x-1/2 text-5xl snap-center">
          {homeHeader.split("/").map((key, index) => {
            return (
              <span
                className={`[animation-range:0%_--spacing(100)] timeline-scroll ${index > 0 ? "animate-split-right" : "animate-split-left"}`}
              >
                {key}
              </span>
            );
          })}
        </h1>
        <h1 className="flex items-center gap-2 fixed bottom-6/10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-1000">
          Scroll down
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-pulse text-white"
          >
            <path
              d="M8 12L12 16M12 16L16 12M12 16V8M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h1>
        <Blank className="h-[calc(var(--spacing)_*_200))]" />
        <img
          className="animate-fade-in timeline-view [animation-range:0%_50%] absolute w-screen h-full left-1/2 -translate-x-1/2 m-auto snap-center snap-always"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10"
          ref={imgRef}
        />
        <Blank className="h-screen min-w-screen mb-2" />
        <Blank className="h-screen w-full snap-always snap-center bg-rose-300" />
      </div>
    ),
  };
  const content = scenes[scene];
  return <>{content}</>;
}

type ShopItemProps = {} & shopItem;

function ShopItem({ src, price, name }: ShopItemProps) {
  return (
    <div className="p-0 m-0 flex flex-col gap-1 animate-dostuff timeline-view [animation-range:entry_0%_cover_40%]">
      <div className="group grid justify-items-center items-end h-full w-full">
        <img
          className="col-start-1 col-end-2 row-start-1 row-end-2 p-0 m-0 rounded-3xl w-full h-full"
          src={src}
        />
        <h1 className="col-start-1 col-end-2 row-start-1 row-end-2 text-black font-medium text-2xl bg-white/30 backdrop-hue-rotate-270 backdrop-blur-lg w-full p-0 m-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-full group-hover:cursor-pointer rounded-3xl ">
          {name}
        </h1>
      </div>
      <h1 className="font-medium text-2xl p-0 m-0 flex justify-center w-full">
        {price}
      </h1>
    </div>
  );
}

type BlankProps = {
  className?: string;
  children?: ReactNode;
};

function Blank({ className, children }: BlankProps) {
  return <div className={twMerge("min-w-full min-h-50", className)}>{children}</div>
}
