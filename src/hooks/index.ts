import { useState } from 'react';

interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  topics?: string[];
  synthesisSlug?: string;
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

  const subscribe = async (data: SubscribeRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { email, firstName, lastName, topics, synthesisSlug } = data;

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return false;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          topics,
          synthesisSlug,
        }),
      });

      if (response.ok) {
        const successData = await response.json();
        setSuccess(successData.message);
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
