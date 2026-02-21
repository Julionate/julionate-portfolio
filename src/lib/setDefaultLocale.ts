import type { availableLocalesByCode } from "@/types/Locales";

export function setDefaultLocale<T extends availableLocalesByCode>(code: T) {
	return code;
}
