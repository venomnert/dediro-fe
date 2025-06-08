import { createClient } from 'contentful';

// Define types for the client
interface ContentfulClient {
  getEntries: (query?: any) => Promise<{ items: any[] }>;
  getEntry: (id: string, query?: any) => Promise<any>;
  getAsset: (id: string, query?: any) => Promise<any>;
}

// Create mock clients if environment variables are not available
let deliveryClient: ContentfulClient;
let previewClient: ContentfulClient;

if (
  process.env.CONTENTFUL_SPACE_ID &&
  process.env.CONTENTFUL_ACCESS_TOKEN &&
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
) {
  // Real clients if environment variables are available
  deliveryClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  }) as ContentfulClient;

  previewClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  }) as ContentfulClient;
} else {
  // Mock clients for development/build without environment variables
  const mockClient: ContentfulClient = {
    getEntries: () => Promise.resolve({ items: [] }),
    getEntry: () => Promise.resolve({}),
    getAsset: () => Promise.resolve({}),
  };

  deliveryClient = mockClient;
  previewClient = mockClient;

  console.warn(
    'Using mock Contentful clients. Set environment variables for real data.'
  );
}

export { deliveryClient, previewClient };
