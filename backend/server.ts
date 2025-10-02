// backend/server.ts
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'; // Import dotenv
import { createPaymentIntent } from './api/create-payment-intent';
import { handleStripeWebhook } from './api/store-payment-data';


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', createPaymentIntent);
app.post('/stripe-webhook', handleStripeWebhook);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});