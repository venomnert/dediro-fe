import { TrackClient, RegionUS } from 'customerio-node';

const CUSTOMER_API_KEY = process.env.CUSTOMER_API_KEY || '';
const CUSTOMER_SITE_ID = process.env.CUSTOMER_IO_SITE_ID || '';

const cio = new TrackClient(CUSTOMER_SITE_ID, CUSTOMER_API_KEY, {
  region: RegionUS,
});

// Define types for request body and Customer.io API response
interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  categories?: string[];
}
export async function POST(request: Request): Promise<Response> {
  const { email, firstName, lastName, categories }: SubscribeRequest =
    await request.json();

  try {
    cio.identify(email, {
      email,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
      categories: categories || undefined,
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
