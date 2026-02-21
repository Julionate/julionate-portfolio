import type { GetLocaleOptions } from "astro:i18n";
import {
	getAbsoluteLocaleUrl as absoluteLocaleUrl,
	getRelativeLocaleUrl as relativeLocaleUrl,
} from "astro:i18n";
import type { availableLocalesByCode } from "@/types/Locales";

export function getRelativeLocaleUrl(
	locale: availableLocalesByCode,
	path: string,
	options?: GetLocaleOptions,
) {
	return relativeLocaleUrl(locale, path, options);
}

export function getAbsoluteLocaleUrl(
	locale: availableLocalesByCode,
	path: string,
	options?: GetLocaleOptions,
) {
	return absoluteLocaleUrl(locale, path, options);
}
