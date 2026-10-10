import Banner from "@/components/Banner";
import Button from "@/components/Button";
import MotionDiv from "@/components/div";
import Hero from "@/components/Hero";
import HeroImg from "@/components/HeroImg";
import HeroText from "@/components/HeroText";

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
          button={<Button link>Shop Now</Button>}
          image={
            <MotionDiv className="w-full rounded-[10px] overflow-hidden grid place-items-center">
              <MotionDiv
                className="row-start-1 row-end-2 col-start-1 col-end-2 w-full z-50 rounded-[10px] overflow-hidden"
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0,
                }}
              >
                <img
                  src="https://scontent-den2-1.cdninstagram.com/v/t51.71878-15/616373869_1974805220111256_2824098477955606987_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzgxMTAyNTEzODc2MzI0Mzk1MzExODI2MDIxMDM2MDE0MjA%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fbmZyYW1lX2NvdmVyX2ZyYW1lLkMzIn0%3D&_nc_ohc=67w6Qekp6BoQ7kNvwGuc3LQ&_nc_oc=Adob-SnH26UgM9UxrhMfRxM4sl_rnsdUHW4Y4KvjO9AiD3hzy0UyuZNqxFnB263iffk&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_gid=bNxE1F8daZsWN5ffyYL4XA&_nc_ss=7baaf&oh=00_AQPlFqdIfM_Qm1J2tN-fF0oIuqXVVcCFVXTexXe--22VIQ&oe=6ACCC531"
                  className="w-full"
                />
              </MotionDiv>
              <MotionDiv className="row-start-1 row-end-2 col-start-1 col-end-2 w-full -z-1">
                <img
                  src="https://scontent-den2-1.cdninstagram.com/v/t51.71878-15/615820959_2081064816015030_3014243168953096858_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzgxMTY5Mjg0MzM0NjUxNzUyODE3ODQ5NTA3MzI4NjYzNzc3.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fbmZyYW1lX2NvdmVyX2ZyYW1lLkMzIn0%3D&_nc_ohc=0A1Ybyrb-lcQ7kNvwEnN3WJ&_nc_oc=AdoseUaz2u6Gri0DPYIVMFwoMpH6WzQZ-vb9O12vUa1EgGoRMgCD185Du6hc0MbOTQs&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_gid=bNxE1F8daZsWN5ffyYL4XA&_nc_ss=7baaf&oh=00_AQNng7NUb-NmaUq0Ms9oTD7Dr-Yoo3Wyg7M_8iGfwpTCJQ&oe=6ACCB7B8"
                  className="w-full"
                />
              </MotionDiv>
            </MotionDiv>
          }
        />
        <Banner />
        {/* introducing the snowpants */}
        <div className="w-full sm:min-h-screen md:h-screen flex items-center justify-between gap-20 sm:p-55 md:flex-row-reverse sm:flex-col p-7">
          <HeroText
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
            button={<Button link>Buy Now</Button>}
          />
          <HeroImg>
            <img
              className="rounded-[10px]"
              src="https://scontent-den2-1.cdninstagram.com/v/t51.71878-15/625973691_1464170381897991_541916149886580860_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzgyNTI5Mjc1Nzc4MzY2MDIzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=-7VO-GcjAN4Q7kNvwG41qsA&_nc_oc=AdpukQpJnwtnoQ3nxZ-u3hNodhn4q4nb42TR4zfjAsDuysbpPpEgRHBEbj7GZeZ225c&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_gid=BDmDSNlvrHqA6WF_0o6WQA&_nc_ss=7b6a8&oh=00_AQNaUHMLjJj9rXuqxV9uMdaKEuZmE6YG5hsgjbQc2r_hPQ&oe=6AD063F7"
            />
          </HeroImg>
        </div>
      </div>
    </>
  );
}

export type logoColor = "primary" | "secondary" | "white";
