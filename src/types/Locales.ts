import type { locales } from "astro.config";

export type Locale = (typeof locales)[number];
