import { useEffect, useState } from 'react';
import { deliveryClient, previewClient } from '../lib/contentfulClient';
import { useSearchParams } from 'next/navigation';

const useContentful = <T>(contentTypeId: string) => {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('isPreview');
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
        console.log(response, 'ddd');
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
  }, [contentTypeId]);

  return { data, loading, error };
};

export default useContentful;
