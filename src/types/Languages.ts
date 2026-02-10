import type { Locale } from "@/types/Locales";

export type Language = {
	code: Locale;
	url: string;
};

export const LanguageNames: Record<Locale, string> = {
	en: "English",
	es: "Español",
};
