import type { Translation } from "@/types/Locales";

export function createTranslation<T>(
	// Makes all locales optional except the default.
	translateData: Translation<T>,
) {
	return translateData;
}
