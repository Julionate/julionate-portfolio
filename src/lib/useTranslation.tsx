import { defaultLocale } from "astro.config";
import type { LocaleCodes, Translation } from "@/types/Locales";

export function useTranslation<T>(lang: LocaleCodes, data: Translation<T>) {
	return <K extends keyof T>(key: K): T[K] =>
		(data[lang]?.[key] ?? data[defaultLocale][key]) as T[K];
}
