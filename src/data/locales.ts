// Use relative path so astro.config.mjs can read it
import { setDefaultLocale } from "../lib/setDefaultLocale"

export const availableLocales = {
	"en": "english",
	"es": "español"
} as const

export const defaultLocale = setDefaultLocale("en")