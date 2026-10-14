"use client";

import { createContext, ReactNode } from "react";

export const PantsContext = createContext<null | pantsContextType>(null);

type pantsContextType = (Record<
  "name" | "price" | "description" | "material" | "size",
  string
> & { image: string[] })[];

type pantsProviderProps = {
  children?: ReactNode;
};

export default function PantsProvider({ children }: pantsProviderProps) {
  const pants: pantsContextType = [
    {
      name: "snow-pants",
      price: "$100",
      image: [
        "https://scontent-phx1-1.cdninstagram.com/v/t51.71878-15/627723662_903654935600264_5869067674431556526_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzgyODkyMDc4Njc3ODk0MDAyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=kNDCSeM8qncQ7kNvwFl7k4t&_nc_oc=Adp_P6HOB5evr7nyZlLYlvzyWMSV5NltK5jeM_t9N285HxO_soTvYeoGu-M6JXfDrm0&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=KAOpMupshqXZzr6T8clcmw&_nc_ss=7b6a8&oh=00_AQO9602goVjjOZrPkAhnBBphxw2uaOawpCjm41_U7MIBMg&oe=6AD331FE",
        "https://scontent-phx1-1.cdninstagram.com/v/t51.71878-15/625361543_1165774622085720_1724284060282320211_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzgyNDcxMzAyNTk0MTc1NzU0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=TgA_eov-HFwQ7kNvwEz9jqa&_nc_oc=AdpAXCAeG39i4pnfIAIWjHYHzOIPjfxj-d7NO7TbT2w-YDJzkXZx0jgMPTCja9PTuUM&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=KAOpMupshqXZzr6T8clcmw&_nc_ss=7b6a8&oh=00_AQM3Uymkhd3UNMx-rP5a9384i-88Bs1aU1AW4_LKwjZoTQ&oe=6AD31A3E",
        "https://scontent-phx1-1.cdninstagram.com/v/t51.71878-15/625973691_1464170381897991_541916149886580860_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzgyNTI5Mjc1Nzc4MzY2MDIzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=32WmbXANR6oQ7kNvwHm2Dn-&_nc_oc=AdrSL7Ztn_Tcr51gOBeSrNpUsHxvdZJx4GODM2yZAPtCtjayRyQec-6ishZs3Ml0Q6k&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=KAOpMupshqXZzr6T8clcmw&_nc_ss=7b6a8&oh=00_AQNYWzz1OHwQaB9IMM1484oyGcdbzcB90NN7hgPfTBD2QQ&oe=6AD306F7",
        "https://scontent-phx1-1.cdninstagram.com/v/t51.71878-15/625630252_1578442343397917_8059769579783902610_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzgyMjM3NzgyODU5MjI0MTU5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=TAP3ZX_a2XUQ7kNvwHFhQtP&_nc_oc=AdqNSVAqkh1C044es7QUHMjd1gtwNGneEY41mTerQ5f1ipAT5tQjIlADyT7JWJD2mbQ&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=td3x_AWXfhhhxg-FaOVh6Q&_nc_ss=7b6a8&oh=00_AQM74ZYQ7QrZ3YQ6rDXrb-f4rRURCfjuCx9xgqrU0cnOQA&oe=6AD35EC7",
        "https://scontent-phx1-1.cdninstagram.com/v/t51.71878-15/622851431_1599033514773770_3321864247477833163_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzgxODAxODI2MDg3NjU3MjI5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=NxsZDkIL5ZoQ7kNvwEXUO2-&_nc_oc=AdpXkH9tJhLzVIDUPPwiOW6BuH302uEC_rXO6FUGn1QQrsrTmlIY4R9te3iHHyXZf-A&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=td3x_AWXfhhhxg-FaOVh6Q&_nc_ss=7b6a8&oh=00_AQN0-2KHhokLDPb91zXqFR49Xj9yR4hM2D4UW-NCcZjIZg&oe=6AD33688",
      ],
      description: "cool pants that look cool",
      material: "canvas",
      size: "XL"
    },
  ];
  return <PantsContext value={pants}>{children}</PantsContext>;
}
