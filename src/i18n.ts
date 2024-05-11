import {notFound} from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const defaultLocale = 'pt-BR'
const locales = [defaultLocale, 'en-US', 'de-DE', 'id'] as const

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`./dictionary/${locale}.json`)).default
  };
});
