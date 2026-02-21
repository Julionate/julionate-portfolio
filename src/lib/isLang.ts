import { availableLocales } from "@/data/locales";
import type { availableLocalesByCode } from "@/types/Locales";

export const isLang = (value: string): value is availableLocalesByCode => {
	return value in availableLocales;
};
