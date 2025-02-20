// import { google } from "googleapis";
// import { readFileSync } from "fs";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config();

// const serviceAccountPath = path.join(process.cwd(), "service-account.json"); // Change path if needed
// const credentials = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
// const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

// const auth = new google.auth.GoogleAuth({
//   credentials,
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const sheets = google.sheets({ version: "v4", auth });

// export async function appendToSheet(values: any[]) {
//   try {
//     const range = "Sheet1!A:G"; // Modified to read all columns
//     const paymentIntent = values[5]; // Payment intent is at index 5

//     // First check if payment intent exists
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId,
//       range,
//     });

//     const rows = response.data.values || [];
//     const paymentIntentExists = rows.some(row => row[5] === paymentIntent);

//     if (paymentIntentExists) {
//       console.log('Payment intent already exists, skipping append');
//       return;
//     }

//     // If payment intent doesn't exist, append the new row
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet1!A1",
//       valueInputOption: "RAW",
//       requestBody: { values: [values] },
//     });
//   } catch (error) {
//     console.error('Error appending to sheet:', error);
//     throw error;
//   }
// }
