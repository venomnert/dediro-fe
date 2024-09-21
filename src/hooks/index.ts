import { analytics } from '@/components/Common/Analytics';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

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

  const subscribe = async (data: SubscribeRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const cioRequestBody = {
        email: data.email,
        first_name: data.firstName || undefined,
        last_name: data.lastName || undefined,
        topics: data.topics || undefined,
      };

      analytics.identify({
        userId: uuid,
        traits: cioRequestBody,
      });

      setSuccess('User subscribed or updated successfully!');
      return true;
    } catch (error) {
      console.error('Error with Customer.io:', error);
      setError('Error subscribing user');
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
