import { NextResponse } from 'next/server';
import { createClient } from 'contentful-management';
import { deliveryClient } from '@/lib/contentfulClient';

interface ContentTypeInfo {
  id: string;
  name: string;
  description?: string;
}

// GET /api/contentful/content-types
export async function GET() {
  try {
    const result = {
      allContentTypes: [] as ContentTypeInfo[],
      contentTypesWithEntries: [] as string[],
      success: true,
      message: ''
    };

    // Method 1: Get all content types using Management API
    if (process.env.CONTENTFUL_MANAGEMENT_TOKEN && process.env.CONTENTFUL_SPACE_ID) {
      try {
        const managementClient = createClient({
          accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
        });

        const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE_ID);
        const environment = await space.getEnvironment('master');
        const contentTypesResponse = await environment.getContentTypes();

        result.allContentTypes = contentTypesResponse.items.map(ct => ({
          id: ct.sys.id,
          name: ct.name,
          description: ct.description
        }));
      } catch (error) {
        console.error('Management API error:', error);
        result.message += 'Management API failed. ';
      }
    } else {
      result.message += 'Management token not configured. ';
    }

    // Method 2: Get content types that have published entries
    try {
      const response = await deliveryClient.getEntries({
        limit: 100
      });

      const contentTypeSet = new Set(response.items.map((item: any) => item.sys.contentType.sys.id));
      result.contentTypesWithEntries = Array.from(contentTypeSet);
    } catch (error) {
      console.error('Delivery API error:', error);
      result.message += 'Delivery API failed. ';
      result.success = false;
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch content types',
        allContentTypes: [],
        contentTypesWithEntries: [],
        success: false
      },
      { status: 500 }
    );
  }
}