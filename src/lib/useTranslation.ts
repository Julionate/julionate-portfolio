import { defaultLocale } from "@/data/locales";
import type { availableLocalesByCode, Translation } from "@/types/Locales";

export function useTranslation<T>(
	lang: availableLocalesByCode,
	data: Translation<T>,
) {
	return <K extends keyof T>(key: K): T[K] =>
		(data[lang]?.[key] ?? data[defaultLocale][key]) as T[K];
}
