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

type Knowledge = {
	name: string;
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

export const Knowledges = [
	{
		name: "Rust",
		description: "I know rust since i was an adult",
		iconSVG: Rust,
		type: "Language",
		url: "https://rust-lang.org/",
		color: "#FFC832",
	},
	{
		name: "Python",
		description: "I know python since i was a Kid",
		iconSVG: Python,
		type: "Language",
		url: "https://www.python.org/",
		color: "#376F9E",
	},
	{
		name: "JavaScript",
		description: "I know JavaScript since I was a Kid",
		iconSVG: JavaScript,
		type: "Language",
		url: undefined,
		color: "#F0DB4F",
	},
	{
		name: "TypeScript",
		description: "Types? Nowadays it's a must use.",
		iconSVG: TypeScript,
		type: "Language",
		url: "https://www.typescriptlang.org/",
		color: "#3178C6",
	},
	{
		name: "Astro",
		description: "The framework which this website was builded.",
		iconSVG: Astro,
		type: "Framework",
		url: "https://astro.build/",
		color: "#E53BA4",
	},
	{
		name: "React",
		description:
			"The most famous frontend framework, this website uses it also.",
		iconSVG: React,
		type: "Framework",
		url: "https://react.dev/",
		color: "#58C4DC",
	},
	{
		name: "Preact",
		description: "React but with signals and more concise, got it.",
		iconSVG: Preact,
		type: "Framework",
		url: "https://preactjs.com/",
		color: "#673AB8",
	},
	{
		name: "React Native",
		description: "Mobile applications with React.",
		iconSVG: React,
		type: "Framework",
		url: "https://reactnative.dev/",
		color: "#58C4DC",
	},
	{
		name: "Expo",
		description: "Mobile applications with React Native and more!",
		iconSVG: Expo,
		type: "Framework",
		url: "https://expo.dev/",
		color: "#FFFFFF",
	},
	{
		name: "TailwindCSS",
		description: [
			"Style with classess.",
			"Even this site is styled with tailwindcss!",
		],
		iconSVG: TailwindCSS,
		type: "Framework",
		url: "https://tailwindcss.com/",
		color: "#38BDF8",
	},
	{
		name: "Express.js",
		description:
			"One of the most famous frameworks to create fast API's with node.",
		iconSVG: Expressjs,
		type: "Framework",
		url: "https://expressjs.com/",
		color: "#FFFFFF",
	},
] as const satisfies readonly Knowledge[];
