import type { ComponentType, SVGProps } from "react";
import {
	Astro,
	Expo,
	Expressjs,
	JavaScript,
	Preact,
	Python,
	React,
	Rust,
	TailwindCSS,
	TypeScript,
} from "@/assets/icons";
import { createTranslation } from "@/lib/createTranslation";
import type { Translation } from "@/types/Locales";

type Knowledge = {
	description: string | string[];
	iconSVG: ComponentType<SVGProps<SVGSVGElement>>;
	type: "Language" | "Technology" | "Framework";
	url: string | undefined;
	color: string;
};

type CategoryColors = {
	Background: string;
	Text: string;
	Shadow: string;
	Blob: string;
};

export const TypeColors: Record<Knowledge["type"], CategoryColors> = {
	Technology: {
		Background: "bg-red-500/25",
		Text: "text-red-900 dark:text-red-400",
		Shadow: "shadow-red-500/15",
		Blob: "from-red-500/25",
	},
	Framework: {
		Background: "bg-blue-500/25",
		Text: "text-blue-900 dark:text-blue-400",
		Shadow: "shadow-blue-500/15",
		Blob: "from-blue-500/25",
	},
	Language: {
		Background: "bg-green-500/10",
		Text: "text-green-900 dark:text-green-400",
		Shadow: "shadow-green-500/15",
		Blob: "from-green-500/25",
	},
};

export const useKnowledges = createTranslation({
	en: {
		rust: {
			description:
				"My first low-level language. I'm still learning it, and I love it.",
			iconSVG: Rust,
			type: "Language",
			url: "https://rust-lang.org/",
			color: "#FFC832",
		},
		python: {
			description: "A very versatile language!",
			iconSVG: Python,
			type: "Language",
			url: "https://www.python.org/",
			color: "#376F9E",
		},
		javaScript: {
			description: "I've known JavaScript since I was a kid, literally.",
			iconSVG: JavaScript,
			type: "Language",
			url: undefined,
			color: "#F0DB4F",
		},
		typeScript: {
			description: "JavaScript with types? Sure.",
			iconSVG: TypeScript,
			type: "Language",
			url: "https://www.typescriptlang.org/",
			color: "#3178C6",
		},
		astro: {
			description: [
				"A framework for building static or hybrid SSR websites. I love it.",
				"This website uses Astro!",
			],
			iconSVG: Astro,
			type: "Framework",
			url: "https://astro.build/",
			color: "#E53BA4",
		},
		react: {
			description: [
				"The most famous frontend framework.",
				"This website uses React for interactivity, just like this carousel.",
			],
			iconSVG: React,
			type: "Framework",
			url: "https://react.dev/",
			color: "#58C4DC",
		},
		preact: {
			description: "React with signals and a smaller footprint.",
			iconSVG: Preact,
			type: "Framework",
			url: "https://preactjs.com/",
			color: "#673AB8",
		},
		"react native": {
			description: "Mobile applications built with React.",
			iconSVG: React,
			type: "Framework",
			url: "https://reactnative.dev/",
			color: "#58C4DC",
		},
		expo: {
			description: "Mobile applications with React Native and more!",
			iconSVG: Expo,
			type: "Framework",
			url: "https://expo.dev/",
			color: "#FFFFFF",
		},
		tailwindCSS: {
			description: [
				"Styling the modern way.",
				"This website was styled with Tailwind CSS!",
			],
			iconSVG: TailwindCSS,
			type: "Framework",
			url: "https://tailwindcss.com/",
			color: "#38BDF8",
		},
		"express.js": {
			description: "One of the most popular frameworks for building fast APIs.",
			iconSVG: Expressjs,
			type: "Framework",
			url: "https://expressjs.com/",
			color: "#FFFFFF",
		},
	},
	es: {
		rust: {
			description:
				"Mi primer lenguaje de bajo nivel. Aún lo estoy aprendiendo y lo amo!",
		},
		python: {
			description: "Un lenguaje muy versátil!",
		},
		javaScript: {
			description: "Conozco JavaScript desde que soy un niño, literalmente.",
		},
		typeScript: {
			description: "JavaScript con tipado? Por supuesto.",
		},
		astro: {
			description: [
				"Framework para hacer páginas estáticas/híbridas.",
				"Esta página fue hecha con Astro. Lo amo!",
			],
		},
		react: {
			description: [
				"El framework de frontend más famoso.",
				"Este sitio utiliza Astro para la interactividad (como este carousel).",
			],
		},
		preact: {
			description: "React pero con señales y más pequeño.",
		},
		"react native": {
			description: "Aplicaciones móviles con React.",
		},
		expo: {
			description: "Aplicaciones móviles con React Native y mucho más!",
		},
		tailwindCSS: {
			description: [
				"Estilar de la forma más moderna hoy en día.",
				"Esta página fue 100% estilada con TailwindCSS!",
			],
		},
		"express.js": {
			description: "Uno de los frameworks más famosos para crear APIs.",
		},
	},
} satisfies Translation<Record<string, Knowledge>>);
