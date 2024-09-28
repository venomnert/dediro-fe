import { useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_CUSTOMER_IO_JS_API_KEY || '';
const siteId = process.env.NEXT_PUBLIC_CUSTOMER_IO_SITE_ID || '';

interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  topics?: string[];
}

interface UseSubscribeReturn {
  // eslint-disable-next-line no-unused-vars
  subscribe: (data: SubscribeRequest) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  success: string | null;
}

export function useSubscribe(): UseSubscribeReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const cioTrackBaseUrl = 'https://track.customer.io/api/v1/customers';
  const credentials = btoa(`${siteId}:${apiKey}`);

  const subscribe = async (data: SubscribeRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { email, firstName, lastName, topics } = data;

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return false;
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
        setSuccess('User subscribed or updated successfully!');
        return true;
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || 'Failed to subscribe user'}`);
        return false;
      }
    } catch (error) {
      setError(
        `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    subscribe,
    loading,
    error,
    success,
  };
}
