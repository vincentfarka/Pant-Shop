import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";

export async function POST(request: Request) {
  try {
    // get quantity
    const formData = await request.formData()
    const quantityString = formData.get('quantity')
    const quantity = parseInt(quantityString as string, 10) || 1
    // get origin to go back to
    const headersList = await headers();
    const origin =
      "https://special-guide-5v4qxjpw7j9xfp7w9-3000.app.github.dev/";

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: "price_1UQf51Dkr0qffUa90qzKL2qp",
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
    });

    if (!session.url) {
      throw new Error("session url is not defined");
    }
    // redirect the user
    return NextResponse.redirect(session.url, 303);
  } catch (err: any) {
    // give error
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
