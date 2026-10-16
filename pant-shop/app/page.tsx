import Banner from "@/components/Banner";
import Button from "@/components/Button";
import MotionDiv from "@/components/div";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        {/* hero section */}
        <Hero
          header={
            <h1 className="w-full h-fit sm:text-left text-center">
              Making pants that <br />
              <span className="text-primary">you want to wear</span>
            </h1>
          }
          pharagraph={
            <p className="text-black/70 w-full h-fit sm:inline hidden">
              We make pants that are designed straight from Etienne Farka and
              Liam Grippa, co founders of{" "}
              <span className="font-roboto">bblankk[ ]</span>.
            </p>
          }
          button={
            <Button link scrollTo="#snow-pants">
              Shop Now
            </Button>
          }
          image={
            <MotionDiv className="w-full rounded-[10px] overflow-hidden grid place-items-center">
              <MotionDiv
                className="row-start-1 row-end-2 col-start-1 col-end-2 w-full z-50 rounded-[10px] overflow-hidden"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0,
                }}
              >
                <img
                  src="/starter-1.png"
                  className="w-full"
                />
              </MotionDiv>
              <MotionDiv className="row-start-1 row-end-2 col-start-1 col-end-2 w-full -z-1">
                <img
                  src="/starter-2.png"
                  className="w-full"
                />
              </MotionDiv>
            </MotionDiv>
          }
        />
        <Banner />
        {/* introducing the snowpants */}
        <Hero
          oneColunm
          header={
            <h1 className="w-full h-fit sm:text-left text-center text-white">
              Making pants that <br />
              you want to wear
            </h1>
          }
          pharagraph={
            <p className="text-white/70 w-full h-fit sm:inline hidden">
              We make pants that are designed straight from Etienne Farka and
              Liam Grippa, co founders of{" "}
              <span className="font-roboto">bblankk[ ]</span>.
            </p>
          }
          button={
            <Link href="/pants/0">
              <Button id="snow-pants" link>
                Buy Now
              </Button>
            </Link>
          }
          image={
            <img
              className="rounded-[10px] w-full min-h-[200vh] -translate-y-1/2"
              src="/0-1.png"
            />
          }
        />
      </div>
    </>
  );
}

export type logoColor = "primary" | "secondary" | "white";
