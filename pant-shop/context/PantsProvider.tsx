"use client";

import { createContext, ReactNode } from "react";

export const PantsContext = createContext<null | pantsContextType>(null);

type pantsContextType = (Record<
  "name" | "price" | "description" | "material",
  string
> & {image: string[]})[];

type pantsProviderProps = {
  children?: ReactNode;
};

export default function PantsProvider({ children }: pantsProviderProps) {
  const pants: pantsContextType = [
    {
      name: "snow-pants",
      price: "$100",
      image:
        ["https://scontent-den2-1.cdninstagram.com/v/t51.71878-15/625361543_1165774622085720_1724284060282320211_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzgyNDcxMzAyNTk0MTc1NzU0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=TgA_eov-HFwQ7kNvwEz9jqa&_nc_oc=AdpAXCAeG39i4pnfIAIWjHYHzOIPjfxj-d7NO7TbT2w-YDJzkXZx0jgMPTCja9PTuUM&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_gid=qMnrUtGf6ZYSd88-iPaGng&_nc_ss=7baaf&oh=00_AQORVgPM5vvF6T6kBXUA3VgNudnFwZkUcd0YOKEd4rf7tQ&oe=6AD200FE"],
      description: "cool pants that look cool",
      material: "canvas",
    },
  ];
  return <PantsContext value={pants}>{children}</PantsContext>;
}
