// import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN || !process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  throw new Error(
    'Contentful environment variables are missing. Please ensure CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, and CONTENTFUL_PREVIEW_ACCESS_TOKEN are set in your .env file.'
  );
}

export const deliveryClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});