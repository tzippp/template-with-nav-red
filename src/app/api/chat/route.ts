import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Placeholder: Return chat messages
  return NextResponse.json({ message: 'List of chat messages' });
}

export async function POST(request: NextRequest) {
  // Placeholder: Send a new chat message
  const data = await request.json();
  return NextResponse.json({ message: 'Chat message sent', data });
} 