import type { DeepPartial } from "node_modules/astro/dist/type-utils";
import type { ValueOf } from "type-fest";
import { type availableLocales, defaultLocale } from "@/data/locales";

export type availableLocalesByCode = keyof typeof availableLocales;
export type availableLocalesByName = ValueOf<typeof availableLocales>;

export type LocaleWithUrl = {
	name: availableLocalesByName;
	code: availableLocalesByCode;
	url: string;
};

export type Translation<T> = Partial<
	Record<Exclude<availableLocalesByCode, typeof defaultLocale>, DeepPartial<T>>
> & {
	[defaultLocale]: T;
};
