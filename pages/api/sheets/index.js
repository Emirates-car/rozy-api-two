import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { Timestamp, whatsappno, email, make, model, year, partnumber, partname, city, refno  } = req.body;
    console.log(Timestamp, whatsappno, email, make, model, year, partnumber, partname, city, refno);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.DATABASE_ID,
      range: 'Sheet1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[Timestamp, whatsappno, email, make, model, year, partnumber, partname, city, refno]],
      },
    });

    res.status(201).json({ message: 'It works!', response });
  }
  res.status(200).json(JSON.stringify(response)|| {message: "Hey"});
}

export default handler;
