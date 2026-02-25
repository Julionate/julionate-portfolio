import type { ImageMetadata } from "astro";
import { Cryptorare, Educards, PomodoroDesktop } from "@/assets/projectImages";
import { createTranslation } from "@/lib/createTranslation";
import type { Translation } from "@/types/Locales";

export type project = {
	name: string;
	description: string[] | string;
	url: string;
	imageUrl: ImageMetadata;
	imageAlt: string;
	color: string;
};

const testData = {
	en: {
		"pomodoro-desktop": {
			name: "Pomodoro Desktop",
			description:
				"A pomodoro application builded with Tauri, Preact, Typescript and TailwindCSS",
			url: "https://github.com/Julionate/pomodoro-desktop",
			imageUrl: PomodoroDesktop,
			imageAlt: "Pomodoro Desktop Application",
			color: "#FFFFFF",
		},
		educards: {
			name: "Educards",
			description:
				"Mobile app that allows you to learn concepts through decks and cards. Facilitating your learning and motivating you to learn more.",
			url: "https://github.com/Julionate/educards",
			imageUrl: Educards,
			imageAlt: "Educards app",
			color: "#4CABF6",
		},
		cryptorare: {
			name: "Cryptorare",
			description:
				"Mobile app that allows you to know crypto information with CoinGecko API",
			url: "https://github.com/Julionate/Cryptorare",
			imageUrl: Cryptorare,
			imageAlt: "Cryptorare app",
			color: "#c24296",
		},
	},
} as const satisfies Translation<Record<string, project>>;

export const Projects = createTranslation(
	testData satisfies Translation<Record<string, project>>,
);
