## Mr. Brushee — Portable Shoe Cleaner (Next.js storefront)

This repository contains the frontend for "Mr. Brushee", a small e-commerce storefront built with Next.js and React. The site implements a simple product checkout flow using Stripe Checkout, collects basic customer and shipping information, and includes server routes for creating checkout sessions and handling payment success redirects.

The design was implemented from a Figma reference and the project contains responsive layouts and assets for desktop, tablet, and mobile breakpoints.

---

<img width="1346" height="631" alt="image" src="https://github.com/user-attachments/assets/fbdd368e-a087-408b-8eba-2a930f343624" />

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

<!-- prettier-ignore -->
# Mr. Brushee — Portable Shoe Cleaner

![Next.js](https://img.shields.io/badge/Next.js-15.1.7-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Stripe](https://img.shields.io/badge/Stripe-Payments-6772E5?style=for-the-badge&logo=stripe)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

> A responsive marketing + storefront site for the "Mr. Brushee" portable shoe cleaner — built with Next.js and Stripe Checkout.

---

## Quick demo

> Add screenshots into `./screenshots/` and they'll render in the gallery below.

### Gallery (replace the images with your own)

Desktop / Tablet / Mobile screenshots can be added individually. I removed the table layout to avoid rendering issues — use simple image embeds instead.

**Home (recommended)**

### Home Screens

<div align="center">
<b>Desktop</b>
  
![Home - Desktop](https://github.com/user-attachments/assets/656273ee-ec6e-445b-96b6-e39a25321027) <hr>
</div>

<div align="center">
<b>Tablet</b>

![Home - Tablet](https://github.com/user-attachments/assets/68bd4915-bf8c-44e3-805e-ff9e2a4b6713) <hr>
</div>

<div align="center">
<b>Mobile</b>

![Home - Mobile](https://github.com/user-attachments/assets/9afef5fe-7fd5-4afa-89a4-1f6855954c84)
</div>

---

### Additional screenshots to include

Please add images for these important flows. Suggested filenames are shown in parentheses.

- Product card (desktop + mobile): 
<div align="center">
  <img width="1363" height="632" alt="image" src="https://github.com/user-attachments/assets/a34ca65b-65f5-48e5-8191-4dfbbed7e683" /> <hr>
  <img width="352" height="631" alt="image" src="https://github.com/user-attachments/assets/39563171-1294-4bc7-ad48-d64ec49663b6" /> <hr>
</div>

- Payment / Checkout: 
  <div align="center">
    <img width="1365" height="630" alt="image" src="https://github.com/user-attachments/assets/57e56984-560c-4939-9de4-dd54fa5631d6" /> <hr>
  </div>
  
- Payment Cancel / Cancelled page: 
<div align="center">
    <img width="1365" height="631" alt="image" src="https://github.com/user-attachments/assets/40fecf70-a433-4586-a089-c6142b965c82" />
  </div>

---

## What is this

- 🛍️ Marketing + storefront for a single product (Mr. Brushee)
- 💳 Stripe Checkout for secure payments
- 📦 Shipping & billing collection supported during checkout
- 🎨 Built from a Figma design reference with responsive layouts

## Features

- ✅ Responsive layout (desktop / tablet / mobile)
- ✅ Hosted Stripe Checkout sessions (server-side)
- ✅ Billing, phone & shipping address collection
- ✅ Adjustable product quantity in checkout
- ⚙️ Email & Google Sheets integration hooks (commented helpers included)

## Tech & dependencies

| Category | Libraries |
|---|---|
| Framework | Next.js (App Router) + React 19 |
| Styling | Tailwind CSS |
| Payments | stripe (Stripe Checkout) |
| Email | @sendgrid/mail, nodemailer (present but optional) |
| Google | googleapis (optional Google Sheets helper) |

Key entries are visible in `package.json`.

## Payment integration details

Stripe Checkout session is created at `src/app/api/checkout/route.ts`.

- Payment method: card
- Mode: payment
- Billing address collection: required
- Phone number collection: enabled
- Shipping countries: US, CA, IN, GB
- Product: "Mr. Brushee" ($20.00 hard-coded)
- Redirects: `SUCCESS` and `CANCEL` routes use `NEXT_PUBLIC_BASE_URL`

## Environment variables

Create a `.env.local` at the project root and set:

| Variable | Purpose | Required |
|---|---|:---:|
| `STRIPE_SECRET_KEY` | Stripe secret key (server-side) | ✅ |
| `NEXT_PUBLIC_BASE_URL` | Base URL for success/cancel redirects | ✅ |
| `EMAIL_USER`, `EMAIL_PASS` | SMTP credentials for nodemailer (optional) | ⚪ |
| `SENDGRID_API_KEY` | SendGrid API key (optional) | ⚪ |
| `GOOGLE_SPREADSHEET_ID` | Google Sheets ID for logging (optional) | ⚪ |

Notes:

- Never expose `STRIPE_SECRET_KEY` in client-side code.
- For local testing use Stripe test keys and the test card `4242 4242 4242 4242`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server (Next.js TurboPack) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## How to run locally

1. Install dependencies

```powershell
npm install
```

2. Add `.env.local` with the required variables.

3. Start development server

```powershell
npm run dev
```

4. Open `http://localhost:3000`.

## Screenshots & guidelines

- Place screenshots in `./screenshots/` with the suggested filenames:
  - `desktop-home.png` (1440×900)
  - `tablet-home.png` (1024×768)
  - `mobile-home.png` (375×812)
  - `desktop-product.png` (1440×900)
  - `mobile-checkout.png` (375×812)

- Example markdown to add a screenshot elsewhere:

```md
![Product page - Desktop](./screenshots/desktop-product.png)
```

## Deployment

Recommended: Vercel — Connect the repo, add environment variables and deploy. Vercel auto-detects Next.js.

Manual build & run:

```powershell
npm run build
npm start
```

## Optional extras / notes

- `src/utils/sendEmail.ts` and `src/utils/googleSheets.ts` contain commented helper code for transactional emails and sheet logging. They need API keys and a service account JSON (for Google Sheets).
- Consider moving product metadata (price, images) out of the checkout route into a shared config or CMS for easier updates.

## Contributing

PRs welcome. Ideas:

- Add tests for API routes
- Extract product config into a JSON or CMS
- Implement a webhook to verify Stripe payments and trigger emails/logging

---

If you want, I can:

- Add the `screenshots/` folder and generate simple placeholder images.
- Wire SendGrid email flow or Google Sheets logging (requires API keys and service account file).

---

*README updated with richer visual structure, tables, badges and screenshot gallery.*
