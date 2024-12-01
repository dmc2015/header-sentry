export interface HeaderInfo {
  name: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  vulnerability: string;
  applicability: string[];
  remediation: string;
  situational: boolean;
}

export interface HeaderResultType {
  headerKey: string;
  info: HeaderInfo;
}

export const SECURITY_HEADERS: Record<string, HeaderInfo> = {
  'Content-Security-Policy': {
    name: 'Content Security Policy',
    importance: 'critical',
    description: 'Defines approved sources of content that the browser can load',
    vulnerability: 'Cross-Site Scripting (XSS), injection attacks, and other client-side attacks',
    applicability: [
      'All web pages serving HTML content',
      'Pages with user-generated content',
      'Applications loading external resources'
    ],
    remediation: `Add a CSP header with appropriate directives. Example:
Content-Security-Policy: default-src 'self'; script-src 'self' trusted-scripts.com;`,
    situational: false
  },
  'X-Frame-Options': {
    name: 'X-Frame-Options',
    importance: 'high',
    description: 'Controls whether a page can be embedded in frames, iframes, embeds, and object elements',
    vulnerability: 'Clickjacking attacks where malicious sites embed your page in an iframe',
    applicability: [
      'Any page that shouldn\'t be embedded in other sites',
      'Login forms',
      'Payment pages'
    ],
    remediation: 'Set X-Frame-Options to DENY or SAMEORIGIN',
    situational: false
  },
  'Strict-Transport-Security': {
    name: 'HTTP Strict Transport Security',
    importance: 'critical',
    description: 'Forces browsers to use HTTPS instead of HTTP',
    vulnerability: 'Man-in-the-middle attacks, protocol downgrade attacks',
    applicability: [
      'All production websites',
      'Especially critical for sites handling sensitive data'
    ],
    remediation: 'Set Strict-Transport-Security: max-age=31536000; includeSubDomains',
    situational: false
  },
  'X-Content-Type-Options': {
    name: 'X-Content-Type-Options',
    importance: 'medium',
    description: 'Prevents browsers from MIME-sniffing a response from the declared content-type',
    vulnerability: 'MIME confusion attacks, malicious file execution',
    applicability: [
      'All responses serving content',
      'Especially important for file downloads'
    ],
    remediation: 'Set X-Content-Type-Options: nosniff',
    situational: false
  },
  'Cross-Origin-Embedder-Policy': {
    name: 'Cross-Origin Embedder Policy',
    importance: 'medium',
    description: 'Controls which cross-origin resources can be loaded',
    vulnerability: 'Cross-origin attacks, data leaks through embedded resources',
    applicability: [
      'Pages using SharedArrayBuffer',
      'Pages requiring cross-origin isolation',
      'High-security web applications'
    ],
    remediation: 'Set Cross-Origin-Embedder-Policy: require-corp',
    situational: true
  },
  'Cross-Origin-Opener-Policy': {
    name: 'Cross-Origin Opener Policy',
    importance: 'medium',
    description: 'Controls how the current document interacts with other windows',
    vulnerability: 'Cross-window scripting attacks, reference leaks',
    applicability: [
      'Pages using SharedArrayBuffer',
      'Pages requiring cross-origin isolation',
      'Windows that shouldn\'t be controlled by other origins'
    ],
    remediation: 'Set Cross-Origin-Opener-Policy: same-origin',
    situational: true
  },
  'Permissions-Policy': {
    name: 'Permissions Policy',
    importance: 'high',
    description: 'Controls which browser features and APIs can be used',
    vulnerability: 'Unauthorized use of sensitive browser features',
    applicability: [
      'Pages using powerful browser features',
      'Sites embedding third-party content',
      'Progressive Web Apps'
    ],
    remediation: 'Set appropriate Permissions-Policy directives for required features',
    situational: true
  },
  'Cache-Control': {
    name: 'Cache Control',
    importance: 'medium',
    description: 'Directives for caching mechanisms in both requests and responses',
    vulnerability: 'Information disclosure, stale data exposure',
    applicability: [
      'Dynamic content pages',
      'Pages with sensitive information',
      'API responses'
    ],
    remediation: 'Set appropriate Cache-Control directives (e.g., no-store for sensitive data)',
    situational: true
  },
  'Clear-Site-Data': {
    name: 'Clear Site Data',
    importance: 'medium',
    description: 'Clears browsing data (cookies, storage, cache) associated with the requesting website',
    vulnerability: 'Persistent data exposure after logout',
    applicability: [
      'Logout endpoints',
      'Account deletion flows',
      'Privacy-sensitive operations'
    ],
    remediation: 'Set Clear-Site-Data: "cache", "cookies", "storage" on relevant endpoints',
    situational: true
  },
  'Referrer-Policy': {
    name: 'Referrer Policy',
    importance: 'medium',
    description: 'Controls how much referrer information should be included with requests',
    vulnerability: 'Information leakage through referrer headers',
    applicability: [
      'Pages with sensitive URLs',
      'Sites handling personal information',
      'Cross-origin navigations'
    ],
    remediation: 'Set appropriate Referrer-Policy (e.g., strict-origin-when-cross-origin)',
    situational: false
  }
};