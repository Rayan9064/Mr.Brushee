import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST() {
  try {
    // Create Stripe Checkout Session without sending user data
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',

      // Collect user details directly in Stripe Checkout
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'IN', 'GB'], // Allowed countries
      },
      phone_number_collection: { enabled: true },

      // Product Information
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Mr. Brushee',
              description: 'Portable Shoe Cleaner',
              images: ['https://yourwebsite.com/product-image.png'], // Use public image URL
            },
            unit_amount: 2000, // $20.00 in cents
          },
          adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
          quantity: 1,
        },
      ],

      // Redirect URLs after payment
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Stripe Error:', error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    } else {
      console.error('Unknown Error:', error);
      return NextResponse.json(
        { error: 'An unexpected error occurred' },
        { status: 500 }
      );
    }
  }
}