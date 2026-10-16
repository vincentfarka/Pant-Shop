import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function NotFound() {
  return (
    <Hero
      header={<h1 className="text-red-700">404</h1>}
      pharagraph={<p className="text-black/70">This page cannot be found</p>}
      button={
        <Link href="/">
          <Button link variant="secondary">Go to Home</Button>
        </Link>
      }
      image={
        <img src="/0-1.png" />
      }
    />
  );
}
