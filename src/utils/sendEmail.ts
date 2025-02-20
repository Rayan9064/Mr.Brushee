// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export default async function sendEmail(paymentData: any[]) {
//   try {
//     const [name, recipientEmail, amount, paymentStatus, phone, paymentIntent, customerId] = paymentData;

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const subject = "Payment Confirmation";
//     const message = `Hello ${name}, Thank you for your payment! Your payment of $${amount} has been received successfully. Here is the payment detail:`;

//     // Create formatted message with payment details
//     const formattedMessage = `
//       ${message}

//       Name: ${name}
//       Email: ${recipientEmail}
//       Amount: $${amount}
//       Payment Status: ${paymentStatus}
//       Phone: ${phone}
//       Payment Intent: ${paymentIntent}
//       Customer ID: ${customerId}
//     `;

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: recipientEmail,
//       subject: subject,
//       text: formattedMessage,
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);

//     return NextResponse.json({ success: true, message: "Email sent!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
//   }
// }
