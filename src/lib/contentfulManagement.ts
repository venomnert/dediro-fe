import { createClient } from 'contentful-management';

interface ContentTypeInfo {
  id: string;
  name: string;
  description?: string;
}

export async function getContentTypes(): Promise<ContentTypeInfo[]> {
  try {
    // Check if management token is available
    console.log('CONTENTFUL_MANAGEMENT_TOKEN exists:', !!process.env.CONTENTFUL_MANAGEMENT_TOKEN);
    console.log('CONTENTFUL_SPACE_ID exists:', !!process.env.CONTENTFUL_SPACE_ID);
    
    if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN || !process.env.CONTENTFUL_SPACE_ID) {
      console.warn('CONTENTFUL_MANAGEMENT_TOKEN or CONTENTFUL_SPACE_ID not set');
      return [];
    }

    // Create management client
    const managementClient = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });

    // Get space
    const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE_ID);
    
    // Get environment (usually 'master')
    const environment = await space.getEnvironment('master');
    
    // Fetch content types
    const contentTypesResponse = await environment.getContentTypes();
    
    // Map to simplified format
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

// Alternative function to check what content types have published entries
export async function getContentTypesWithEntries(): Promise<string[]> {
  try {
    const { deliveryClient } = await import('./contentfulClient');
    
    const response = await deliveryClient.getEntries({
      limit: 100 // Get more entries to see various content types
    });
    
    // Extract unique content type IDs from entries
    const contentTypeSet = new Set(response.items.map((item: any) => item.sys.contentType.sys.id));
    const contentTypes = Array.from(contentTypeSet);
    
    return contentTypes;
  } catch (error) {
    console.error('Error fetching content types with entries:', error);
    return [];
  }
}