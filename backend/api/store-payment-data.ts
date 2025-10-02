// backend/api/store-payment-data.ts
import { Request, Response } from 'express';
import Stripe from 'stripe';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import { Readable } from 'stream';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Or your preferred API version
});

const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
const sheetName = process.env.GOOGLE_SHEET_NAME;

const auth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Stripe requires the raw body to construct the signature
// Stripe requires the raw body to construct the signature
interface CustomRequest extends Request {
  rawBody: string;
}

async function buffer(readable: Readable): Promise<Buffer> {
    const chunks: Buffer[] = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export const handleStripeWebhook = async (req: CustomRequest, res: Response) => {
  const signature = req.headers['stripe-signature'];
  const signingSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !signingSecret) {
    return res.status(400).send('Missing Stripe signature or signing secret');
  }

  let event;

  try {
    const rawBody = await buffer(req).then(buffer => buffer.toString());
     event = stripe.webhooks.constructEvent(rawBody, signature, signingSecret);

  } catch (err: any) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Retrieve the expand object
    const expandSession = await stripe.checkout.sessions.retrieve(event.data.object.id, {
      expand: ['line_items'],
    });
    // Extract data (customize based on what you need)
    const customerName = session.customer_details?.name || 'N/A';  // Use optional chaining
    const customerEmail = session.customer_details?.email || 'N/A'; // Use optional chaining
    const amountTotal = session.amount_total / 100;
    const orderDate = new Date().toISOString();
    const quantity = expandSession.line_items?.data[0]?.quantity || "1";

    try {
      await auth.authorize();
      const sheets = google.sheets({ version: 'v4', auth });

      const values = [
        [
          customerName,
          customerEmail,
          amountTotal,
          orderDate,
          quantity
        ],
      ];

      const resource = {
        values,
      };

      await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: sheetName,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: resource,
      });

      console.log('Payment data stored successfully!');
      res.status(200).json({ received: true });
    } catch (error: any) {
      console.error('Error storing payment data:', error);
      res.status(500).json({ error: 'Failed to store payment data or send email' });
    }
  } else {
    res.status(200).json({ received: true });
  }
};