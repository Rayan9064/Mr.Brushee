## Mr. Brushee — Portable Shoe Cleaner (Next.js storefront)

This repository contains the frontend for "Mr. Brushee", a small e-commerce storefront built with Next.js and React. The site implements a simple product checkout flow using Stripe Checkout, collects basic customer and shipping information, and includes server routes for creating checkout sessions and handling payment success redirects.

The design was implemented from a Figma reference and the project contains responsive layouts and assets for desktop, tablet, and mobile breakpoints.

---

## What this website is

- A marketing + storefront site for the "Mr. Brushee" portable shoe cleaner.
- Product page(s) with a Stripe Checkout flow (hosted Stripe Checkout session).
- Basic pages for success and cancel flows after payment.
- Static and media assets under `public/` used for hero, product, and marketing content.

## Tech stack

- Next.js (App Router) — server and client components
- React 19
- TypeScript
- Tailwind CSS for styling
- Stripe (official Node library) for payments
- SendGrid / Nodemailer (present as dependencies / commented utilities) for transactional email (optional)
- Google APIs / Google Sheets (commented utility for optional spreadsheet logging)

Key dependencies visible in `package.json`:

- `next` 15.x, `react` 19
- `stripe` (server-side Stripe SDK)
- `@sendgrid/mail`, `nodemailer` (email utilities are present but commented)
- `googleapis` (commented - optional Google Sheets integration)

## Payment gateway

This project uses Stripe Checkout. The server route at `src/app/api/checkout/route.ts` creates a Checkout Session with the following highlights:

- Card payments via Stripe Checkout
- Billing address and phone collection enabled
- Shipping address collection limited to US, CA, IN, GB
- A single hard-coded product (Mr. Brushee) with adjustable quantity and a unit amount of $20.00 (2000 cents)
- Redirects back to `Success` and `Cancel` pages using `NEXT_PUBLIC_BASE_URL`

Environment variables required for payments and other integrations are documented in the next section.

## Design reference

The UI and layouts were built to match a Figma design provided by the client (Figma file not included in this repo). Use the `public/` images (Hero, Product, Features) as assets mapped from the Figma screens. When adding screenshots to this README, use the filenames suggested below and keep them in a `screenshots/` folder at the project root.

## Project structure (high level)

- `app/` — Next.js App Router pages and server routes
  - `api/checkout/route.ts` — creates a Stripe Checkout session
  - `api/payment-success/route.ts` — payment success handling (see file for details)
- `components/` — UI components (Hero, Navbar, ProductCard, Footer, etc.)
- `public/` — static image assets used by the site
- `src/utils/` — helper utilities (Google Sheets + email utilities are present but commented)

## Environment variables

Create a `.env.local` (or use your hosting provider's environment config) and set the following values:

- `STRIPE_SECRET_KEY` — your Stripe secret key (required to create Checkout sessions)
- `NEXT_PUBLIC_BASE_URL` — site base URL used for success/cancel redirects, e.g. `https://yourdomain.com` or `http://localhost:3000`
- `EMAIL_USER` / `EMAIL_PASS` — (optional) required if using `nodemailer` in `sendEmail.ts`
- `SENDGRID_API_KEY` — (optional) if using SendGrid via `@sendgrid/mail`
- `GOOGLE_SPREADSHEET_ID` and service account credentials file (optional) — used by commented Google Sheets helper

Notes:

- The app expects `STRIPE_SECRET_KEY` to be available server-side. Never expose your secret key in client code.
- `NEXT_PUBLIC_BASE_URL` is used in server routes to craft success/cancel URLs for Stripe Checkout.

## How to run locally

1. Install dependencies:

```
npm install
```

2. Create `.env.local` in the project root and add the env vars from the previous section.

3. Run the dev server:

```
npm run dev
```

4. Open `http://localhost:3000` in your browser.

Stripe checkout sessions will be created by the server route. To test payments locally, use a Stripe test secret key and the card number `4242 4242 4242 4242` with any future expiry and CVC.

## Screenshots (placeholders)

Create a `screenshots/` folder at the project root and add images for these views. Suggested file names and recommended resolutions:

- `desktop-home.png` — Desktop homepage (1440×900)
- `tablet-home.png` — Tablet homepage (1024×768)
- `mobile-home.png` — Mobile homepage (375×812)
- `desktop-product.png` — Desktop product / checkout flow (1440×900)
- `mobile-checkout.png` — Mobile checkout screen (375×812)

You can add screenshot markdown in this README like:

![Desktop homepage](./screenshots/desktop-home.png)

## Deployment

This project is optimized for Vercel (Next.js official host). To deploy:

1. Push the repo to GitHub.
2. Import the repo into Vercel and set the environment variables in the Vercel dashboard.
3. Vercel will detect Next.js and build automatically.

Alternatively, you can build and run manually:

```
npm run build
npm start
```

## Notes & optional extras

- There are commented utilities in `src/utils/` for sending emails (`sendEmail.ts`) and logging to Google Sheets (`googleSheets.ts`). They require additional setup (service account JSON, API keys) and are currently commented out.
- Consider centralizing payment/product metadata into a small server-side product model or an environment-driven config instead of hard-coding price and product details in the checkout route.

## Contributing

If you want to make improvements:

- Add unit/integration tests for critical server routes.
- Extract product definitions and pricing to a shared config file.
- Hook up the SendGrid or Nodemailer utilities to send transactional emails upon successful payment.

---

If you'd like, I can also:

- Add the `screenshots/` folder and a sample screenshot placeholder images.
- Wire the SendGrid email flow or Google Sheets logging (needs API keys).

Marking the README drafting todo completed next.
