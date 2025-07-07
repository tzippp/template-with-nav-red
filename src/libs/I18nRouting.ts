// Removed next-intl/routing for single-language setup
import { AppConfig } from '@/utils/AppConfig';

export const routing = defineRouting({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});
