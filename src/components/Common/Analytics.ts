'use client';

import { AnalyticsBrowser } from '@customerio/cdp-analytics-browser';

const apiKey = process.env.NEXT_PUBLIC_CUSTOMER_IO_JS_API_KEY || '';

export const analytics = AnalyticsBrowser.load({ writeKey: apiKey });

export default function Analytics() {
  return null;
}
