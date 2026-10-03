import { logoColor } from "@/app/page";

type logoProps = {
  size?: number;
  around?: boolean;
  color?: logoColor
};

export default function Logo({ size = 21, around = false, color = "primary" }: logoProps) {
  return (
      <h1
        className={`w-fit h-fit font-semibold font-roboto italic text-nowrap text-${color}`}
        style={{ fontSize: size }}
      >
        {around ? "[ bblankk ]" : "bblankk [ ]"}
      </h1>
  );
}
