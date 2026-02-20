import { availableLocales, type availableLocalesByCode } from "@/data/locales";

export const isLang = (value: string): value is availableLocalesByCode => {
	return value in availableLocales;
};
