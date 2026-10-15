import { redirect } from "next/navigation";

import { stripe } from "../../lib/stripe";
import Button from "@/components/Button";
import Link from "next/link";
import Logo from "@/components/Logo";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const { status, customer_details } = await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: ["line_items", "payment_intent"],
    },
  );

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
        <div className="w-screen h-screen flex flex-col gap-[50px] items-center justify-center">
        <div className="text-center flex gap-[20px] items-center text-H1">
          Thank you for shoping at <Logo size={40} />
        </div>
        <Link href="/"><Button link>Go to Home</Button></Link>
        </div>
    );
  }
}
