import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales: ['en-US', 'de-DE', 'pt-BR', 'id'],
  defaultLocale: 'en-US'
});
export const config = {
  matcher: ['/', '/(de-DE|en-US|pt-BR|id)/:path*'],
};