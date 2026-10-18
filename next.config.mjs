// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() { return [{ source: '/:path*', headers: [
    { key:'Content-Security-Policy', value:"default-src 'self'; script-src 'self' 'unsafe-inline'" + (process.env.NODE_ENV==='development' ? " 'unsafe-eval'" : '') + "; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'" },
    {key:'Strict-Transport-Security',value:'max-age=31536000'},
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'Referrer-Policy',value:'no-referrer'}
  ]}]; },
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true,
  },
};
export default nextConfig;
