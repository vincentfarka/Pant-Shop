import { Brackets, FadingHeader, ScrollIndicator, ShopNowPage } from "@/components/animations";
import Reveal from "@/components/reveal";

export default function Home() {
  const revealDelay = 0.5;

  return (
    <>
      <div className="min-w-screen min-h-screen flex justify-center items-center relative">
        <div className="flex justify-center items-center fixed h-fit w-full">
          <Reveal revealDelay={revealDelay}>
            <h1 className="text-5xl whitespace-nowrap h-fit w-full text-primary overflow-hidden">
              <FadingHeader revealDelay={revealDelay}>bblankk</FadingHeader>
            </h1>
          </Reveal>
          <div className="flex absolute items-center justify-center w-full h-fit">
            <div className="flex relative items-center justify-center w-full h-fit">
              <Brackets revealDelay={revealDelay} />
            </div>
          </div>
        </div>
        <ScrollIndicator revealDelay={revealDelay} />
      </div>
      <ShopNowPage revealDelay={revealDelay}/>
    </>
  );
}