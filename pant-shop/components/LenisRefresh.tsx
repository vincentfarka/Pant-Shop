"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LenisRefresh() {
  const path = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
      });
      const timer = setTimeout(() => {
        lenis.resize();
        console.log("cool");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [path, lenis]);

  return null;
}
