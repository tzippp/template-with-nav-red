// Removed next-intl/navigation for single-language setup
import { routing } from './I18nRouting';

export const { usePathname } = createNavigation(routing);
