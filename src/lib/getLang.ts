import { type availableLocalesByCode, defaultLocale } from "@/data/locales";
import { isLang } from "@/lib/isLang";

export const getLangByHTML = (): availableLocalesByCode => {
	const lang = document.documentElement.lang;
	return isLang(lang) ? lang : defaultLocale;
};
