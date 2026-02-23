import type { ImageMetadata } from "astro";
import { Placeholder } from "@/assets/projectImages";
import { createTranslation } from "@/lib/createTranslation";
import type { Translation } from "@/types/Locales";

type project = {
	name: string;
	description: string[] | string;
	url: string;
	imageUrl: ImageMetadata;
	imageAlt: string;
};

const generateData = (quantity: number): Record<string, project> => {
	return Object.fromEntries(
		Array.from({ length: quantity }, (_, i) => {
			return [
				`project-${i + 1}`,
				{
					name: `Project-${i + 1}`,
					description:
						"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
					imageAlt: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
					imageUrl: Placeholder,
					url: "https://github.com/julionate",
				} satisfies project,
			];
		}),
	);
};

const testData = {
	en: generateData(10),
} as const satisfies Translation<Record<string, project>>;

export const Projects = createTranslation(
	testData satisfies Translation<Record<string, project>>,
);
