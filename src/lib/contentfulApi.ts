// Client-side API utilities for Contentful operations
import React from 'react';

interface ContentTypeInfo {
  id: string;
  name: string;
  description?: string;
}

interface ContentTypesResponse {
  allContentTypes: ContentTypeInfo[];
  contentTypesWithEntries: string[];
  success: boolean;
  message?: string;
}

/**
 * Client-side function to fetch content types from our API route
 * This runs in the browser and calls our server-side API
 */
export async function fetchContentTypes(): Promise<ContentTypesResponse> {
  try {
    const response = await fetch('/api/contentful/content-types');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ContentTypesResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching content types:', error);
    return {
      allContentTypes: [],
      contentTypesWithEntries: [],
      success: false,
      message: `Client error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * React hook for fetching content types with loading state
 */
export function useContentTypes() {
  const [data, setData] = React.useState<ContentTypesResponse | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchContentTypes();
      setData(result);
      
      if (!result.success) {
        setError(result.message || 'Failed to fetch content types');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
}

