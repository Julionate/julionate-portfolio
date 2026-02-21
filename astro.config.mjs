import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { availableLocales } from "./src/data/locales";

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
