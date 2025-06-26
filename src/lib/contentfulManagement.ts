// Server-side only utilities for Contentful Management API
// These functions should only be used in API routes or server components

import { createClient } from 'contentful-management';

interface ContentTypeInfo {
  id: string;
  name: string;
  description?: string;
}

/**
 * Server-side function to get all content types using Management API
 * Should only be used in API routes or server components
 */
export async function getContentTypes(): Promise<ContentTypeInfo[]> {
  try {
    if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN || !process.env.CONTENTFUL_SPACE_ID) {
      console.warn('CONTENTFUL_MANAGEMENT_TOKEN or CONTENTFUL_SPACE_ID not set');
      return [];
    }

    const managementClient = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });

    const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');
    const contentTypesResponse = await environment.getContentTypes();

    const contentTypes: ContentTypeInfo[] = contentTypesResponse.items.map(ct => ({
      id: ct.sys.id,
      name: ct.name,
      description: ct.description
    }));

    return contentTypes;
  } catch (error) {
    console.error('Error fetching content types:', error);
    return [];
  }
}

/**
 * Server-side function to get content types that have published entries
 * Should only be used in API routes or server components
 */
export async function getContentTypesWithEntries(): Promise<string[]> {
  try {
    const { deliveryClient } = await import('./contentfulClient');
    
    const response = await deliveryClient.getEntries({
      limit: 100
    });
    
    const contentTypeSet = new Set(response.items.map((item: any) => item.sys.contentType.sys.id));
    const contentTypes = Array.from(contentTypeSet);
    
    return contentTypes;
  } catch (error) {
    console.error('Error fetching content types with entries:', error);
    return [];
  }
}