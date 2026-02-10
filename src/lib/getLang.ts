import { LanguageNames } from "@/types/Languages";
import type { Locale } from "@/types/Locales";

export const getLang = (code: string): string => {
	return LanguageNames[code as Locale] ?? code;
};
