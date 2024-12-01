import { NextResponse } from 'next/server';
import { SECURITY_HEADERS } from '@/types/security-headers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'URL is required' }, 
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url);
    const headers = Object.fromEntries(response.headers);

    // Create result object with all headers from SECURITY_HEADERS
    const result: Record<string, boolean> = {};
    for (const headerKey of Object.keys(SECURITY_HEADERS)) {
      const headerLower = headerKey.toLowerCase();
      result[headerKey] = !!headers[headerLower];
    }

    return NextResponse.json({
      url,
      headers: result
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch headers. Make sure the URL is accessible.' }, 
      { status: 500 }
    );
  }
}