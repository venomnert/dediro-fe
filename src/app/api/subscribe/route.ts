// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_CUSTOMER_IO_JS_API_KEY || '';
const siteId = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID || '';
const cioTrackBaseUrl = 'https://track.customer.io/api/v1/customers';
const credentials = Buffer.from(`${siteId}:${apiKey}`).toString('base64');

export async function PUT(request: Request) {
  const { email, firstName, lastName, topics } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  const cioRequestBody = {
    email,
    first_name: firstName || undefined,
    last_name: lastName || undefined,
    topics: topics || undefined,
  };

  try {
    const response = await fetch(`${cioTrackBaseUrl}/${email}`, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cioRequestBody),
    });

    if (response.ok) {
      const successData = await response.json();
      return NextResponse.json(
        { message: 'User subscribed or updated successfully!' },
        { status: 200 }
      );
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || 'Failed to subscribe user' },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
