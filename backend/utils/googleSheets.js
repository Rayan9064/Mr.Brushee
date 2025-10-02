//backend/utils/googleSheets.ts
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';

const auth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID; // Replace with your spreadsheet ID
const sheetName = process.env.GOOGLE_SHEET_NAME; // Replace with your sheet name


export async function appendGoogleSheet (values) {
 // Load the jwt keys
  try {
    await auth.authorize();
      const sheets = google.sheets({ version: 'v4', auth });

          const resource = {
            values,
          };

          await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: sheetName,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource,
          });
   console.log('Appended!');
  } catch (error) {
    console.error('Error appending values', error);
    throw error;
  }
}