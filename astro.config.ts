import { setDefaultLocale } from "./src/lib/setDefaultLocale";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export const availableLocales = {
	"en": "english",
	"es": "español"
} as const

export const defaultLocale = setDefaultLocale("en")

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: Object.keys(availableLocales),
		defaultLocale: "en",
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [react()],
});
