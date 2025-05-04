import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('image');

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  // Create the folder if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, file.name);

  // Create a writable stream to save the file directly to disk
  const writeStream = fs.createWriteStream(filePath);

  // Stream file data chunk by chunk
  const fileStream = file.stream();
  
  // Pipe the file stream to the write stream
  fileStream.pipe(writeStream);

  // Return a response once the file is successfully saved
  writeStream.on('finish', () => {
    return NextResponse.json({
      message: 'Upload successful',
      fileUrl: `/uploads/${file.name}`,
    });
  });

  // Handle error while writing the file
  writeStream.on('error', (err) => {
    console.error('Error during file upload:', err);
    return NextResponse.json({ error: 'Error during file upload' }, { status: 500 });
  });
}


export const dynamic = 'force-dynamic';