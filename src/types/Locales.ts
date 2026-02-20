import { availableLocales, defaultLocale } from "@/data/locales";
import type { DeepPartial } from "node_modules/astro/dist/type-utils";

export type LocaleCodes = keyof typeof availableLocales

export type Translation<T> = Partial<
	Record<Exclude<LocaleCodes, typeof defaultLocale>, DeepPartial<T>>
> & {
	[defaultLocale]: T;
};
