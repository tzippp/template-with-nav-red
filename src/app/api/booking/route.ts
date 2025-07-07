import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Placeholder: Return a list of bookings
  return NextResponse.json({ message: 'List of bookings' });
}

export async function POST(request: NextRequest) {
  // Placeholder: Create a new booking
  const data = await request.json();
  return NextResponse.json({ message: 'Booking created', data });
} 