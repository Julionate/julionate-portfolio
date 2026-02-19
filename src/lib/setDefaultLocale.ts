import type { LocaleCodes } from "@/types/Locales";

export function setDefaultLocale<T extends LocaleCodes>(code: T) {
    return code;
}
