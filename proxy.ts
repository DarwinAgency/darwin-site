import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (process.env.PREVIEW_AUTH_ENABLED !== 'true') {
    return NextResponse.next();
  }

  const authHeader = request.headers.get('authorization');

  if (authHeader?.startsWith('Basic ')) {
    try {
      const decoded = atob(authHeader.slice(6));
      const separator = decoded.indexOf(':');
      const username = decoded.slice(0, separator);
      const password = decoded.slice(separator + 1);

      if (
        username === process.env.PREVIEW_USER &&
        password === process.env.PREVIEW_PASSWORD
      ) {
        return NextResponse.next();
      }
    } catch {
      // Invalid base64 → fall through to 401
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Darwin Agency Preprod"',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt).*)'],
};
