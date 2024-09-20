import { Analytics } from '@customerio/cdp-analytics-node';

const CUSTOMER_WRITE_KEY = process.env.CUSTOMER_IO_WRITE_KEY || '';

const cio = new Analytics({
  writeKey: CUSTOMER_WRITE_KEY,
});

interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  topics?: string[];
}
export async function POST(request: Request): Promise<Response> {
  const { email, firstName, lastName, topics }: SubscribeRequest =
    await request.json();

  try {
    const cioRequestBody = {
      email,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
      topics: topics || undefined,
    };

    cio.identify({
      userId: email,
      traits: cioRequestBody,
    });

    return new Response(
      JSON.stringify({ message: 'User subscribed or updated successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error with Customer.io:', error);
    return new Response(JSON.stringify({ message: 'Error subscribing user' }), {
      status: 500,
    });
  }
}
