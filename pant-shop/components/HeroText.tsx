import Button from "./Button";

export default function HeroText() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[385px] w-full h-screen flex flex-col gap-[50px] justify-center sm:items-start items-center">
        {/* hero text */}
        <h1 className="w-full h-fit sm:text-left text-center">
          Making pants that <br />
          <span className="text-primary">you want to wear</span>
        </h1>
        {/* hero pharagraph */}
        <p className="text-black/70 w-full h-fit sm:inline hidden">
          We make pants that are designed straight from Etienne Farka and Liam
          Grippa, co founders of <span className="font-roboto">bblankk[ ]</span>
          .
        </p>
        {/* call to action */}
        <Button link>Shop Now</Button>
      </div>
    </div>
  );
}
