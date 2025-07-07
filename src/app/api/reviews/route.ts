import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Placeholder: Return a list of reviews
  return NextResponse.json({ message: 'List of reviews' });
}

export async function POST(request: NextRequest) {
  // Placeholder: Create a new review
  const data = await request.json();
  return NextResponse.json({ message: 'Review created', data });
} 