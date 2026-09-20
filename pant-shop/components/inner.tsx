// import { ReactNode } from "react";
// import MotionDiv from "./div";
// import { Variants } from "motion";

// type innerProps = {
//   children: ReactNode;
// };

// export default function Inner({ children }: innerProps) {
//   const anim = (variants: Variants) => {
//     return {
//       initial: "initial",
//       animate: "enter",
//       exit: "exit",
//       variants,
//     };
//   };
//   const opacity = {
//     initial: {
//       opacity: 0,
//     },
//     enter: {
//       opacity: 1,
//     },
//     exit: {
//       opacity: 1,
//     },
//   };
//   return (
//         <MotionDiv {...anim(opacity)}>{children}</MotionDiv>
//   );
// }
