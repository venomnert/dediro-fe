import { useEffect, useState } from 'react';
import { deliveryClient, previewClient } from '../lib/contentfulClient';

const useContentful = <T>(contentTypeId: string, isPreview: boolean) => {
  const client = isPreview ? previewClient : deliveryClient;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: contentTypeId,
        });
        if (response.items.length > 0) {
          setData(response.items[0].fields as T);
        } else {
          setData(null);
        }
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentTypeId]);

  return { data, loading, error };
};

export default useContentful;
