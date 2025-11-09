import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'stored-xss');
  
  try {
    const files = await readdir(uploadDir);
    const images = files.map(file => `/uploads/stored-xss/${file}`);
    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
