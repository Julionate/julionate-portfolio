// Specifies the supported locales
export const locales = ["en", "es"] as const;

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: [...locales],
		defaultLocale: "en",
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [react()],
});
