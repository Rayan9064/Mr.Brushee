import Stripe from 'stripe';
import { NextResponse } from 'next/server';
// import { appendToSheet } from '@/utils/googleSheets';
// import sendEmail from '@/utils/sendEmail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(req: Request) {
  try {
    const { sessionId } = await req.json();
    console.log("Received sessionId:", sessionId); // Debug log

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json({ error: "Invalid sessionId" }, { status: 400 });
    }
    // Extract session ID from URL if it's a full URL, otherwise use as is
    const cleanSessionId = sessionId.includes('http') 
      ? new URL(sessionId).pathname.split('/').pop() || sessionId
      : sessionId;
    console.log("Cleaned sessionId:", cleanSessionId); // Debug log
    const session = await stripe.checkout.sessions.retrieve(cleanSessionId);
    console.log("Stripe Session Data:", session);

    // const paymentData = [
    //   session.customer_details?.name || session.metadata?.full_name || 'N/A',
    //   session.customer_email,
    //   session.amount_total ? session.amount_total / 100 : 0,
    //   session.payment_status,
    //   session.metadata?.contact_number || session.customer_details?.phone || 'N/A',
    //   session.payment_intent || 'N/A',
    //   session.customer || 'N/A'
    // ];

    // Store in Google Sheets
    // await appendToSheet(paymentData);

    // Send Email Confirmation
    // await sendEmail(paymentData);

    return NextResponse.json({ message: 'Payment recorded successfully.' });
  } catch (error) {
    console.error('Payment API Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
