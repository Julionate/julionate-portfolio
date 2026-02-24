import { useEffect, useRef } from "react";
import grain from "@/assets/grain.png";
import type { project } from "@/data/projects";

type Props = {
	content: [string, project][];
};

export function Card({ content }: Props) {
	const container = useRef<HTMLDivElement>(null);
	const cards = useRef<HTMLDivElement[]>([]);
	const followers = useRef<HTMLDivElement[]>([]);

	const addFollower = (element: HTMLDivElement | null, i: number) => {
		if (element) {
			followers.current[i] = element;
		}
	};

	const addCard = (element: HTMLDivElement | null, i: number) => {
		if (element) {
			cards.current[i] = element;
		}
	};

	useEffect(() => {
		if (!container.current) return;

		if (!followers.current) return;

		const onMoveHandler = ({
			clientX: axisX,
			clientY: axisY,
			target,
		}: MouseEvent) => {
			if (!target) return;

			cards.current.forEach((card, i) => {
				const { left, top } = card.getBoundingClientRect();
				const x = axisX - left;
				const y = axisY - top;

				followers.current[i].style.transform = `translate(${x}px, ${y}px)`;
			});
		};

		const followerDisplay = () => {
			if (!followers.current) return;
			followers.current.forEach((follower) => {
				follower.classList.replace("opacity-0", "opacity-100");
			});
		};

		const followerHide = () => {
			if (!followers.current) return;

			followers.current.forEach((follower) => {
				follower.classList.replace("opacity-100", "opacity-0");
			});
		};

		container.current.addEventListener("mousemove", onMoveHandler);
		container.current.addEventListener("mouseover", followerDisplay);
		container.current.addEventListener("mouseleave", followerHide);

		// Clean-up listeners
		return () => {
			removeEventListener("mousemove", onMoveHandler);
			removeEventListener("mouseover", followerDisplay);
			removeEventListener("mouseleave", followerHide);
		};
	}, []);

	return (
		<div
			ref={container}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
		>
			{content.map(([_, item], i) => (
				<div
					key={item.name}
					ref={(el) => addCard(el, i)}
					className="relative shadow-lg shadow-accent/85 dark:shadow-accent/50 w-full h-96 md:h-64 flex flex-col p-2 rounded-lg overflow-hidden border"
				>
					<img
						src={item.imageUrl.src}
						alt={item.imageAlt}
						className="h-1/2 aspect-video object-cover"
					/>
					<div className="prose prose-slate dark:prose-invert prose-headings:m-0 prose-p:mt-2">
						<h1 className="text-lg">{item.name}</h1>
						<p className="text-base text-ellipsis overflow-hidden line-clamp-3">
							{item.description}
						</p>
					</div>
					<div
						style={{ backgroundImage: `url(${grain.src})` }}
						className="absolute inset-1 bg-card/85 backdrop-blur-3xl -z-10 rounded-lg bg-repeat-round bg-blend-multiply dark:bg-blend-soft-light"
					></div>
					<div
						ref={(el) => addFollower(el, i)}
						className="absolute follower blur-xl -z-20 mix-blend-hard-light bg-black dark:bg-white size-64 pointer-events-none -translate-1/2 rounded-full opacity-0 transition-opacity duration-800"
					></div>
				</div>
			))}
		</div>
	);
}
