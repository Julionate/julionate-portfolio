import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { useTranslation } from "@/lib/useTranslation";
import { useKnowledges, TypeColors } from "@/data/knowledges";
import { upperFirstLetter } from "@/lib/upperFirstLetter";

type Props = {
	selectBtnLabel: string;
};

export function Knowledges({ selectBtnLabel }: Props) {
	// useTranslation consumes useKnowledges to get translations
	const t = useTranslation("en", useKnowledges)

	// Get the keys from useKnowledges to iterate
	const knowledgeKeys = Object.keys(useKnowledges.en) as Array<keyof typeof useKnowledges["en"]>

	const [api, setApi] = useState<CarouselApi>();

	const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	const goToIndex = (input: number) => {
		if (!api) return;

		const totalValues = api.scrollSnapList().length;
		if (input > totalValues) return;

		carouselStopAndResume();
		api.scrollTo(input);
	};

	const goPrev = () => {
		if (!api) return;

		carouselStopAndResume();
		api.scrollPrev();
	};

	const goNext = () => {
		if (!api) return;

		carouselStopAndResume();
		api.scrollNext();
	};

	const carouselStopAndResume = (delay: number = 8000) => {
		const autoplay = api?.plugins().autoplay;
		if (!autoplay) return;

		autoplay.stop();

		if (resumeTimeout.current) {
			clearTimeout(resumeTimeout.current);
		}

		resumeTimeout.current = setTimeout(() => {
			autoplay.play();
		}, delay);
	};

	useEffect(() => {
		return () => {
			if (resumeTimeout.current) {
				clearTimeout(resumeTimeout.current);
			}
		};
	}, []);

	return (
		<>
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
						stopOnInteraction: false,
						stopOnMouseEnter: true,
					}),
				]}
				setApi={setApi}
				className="mx-auto max-w-lg"
			>
				<CarouselContent>
					{knowledgeKeys.map((name) => {
						const item = t(name)

						return <CarouselItem key={name}>
							<div className="relative border p-3 rounded-lg grid grid-cols-4 grid-rows-2 h-40 shadow-xs overflow-hidden">
								<div
									className="absolute -z-10 size-96 right-0 dark:opacity-25 opacity-15 pointer-events-none"
									style={{
										backgroundImage: `radial-gradient(circle, ${item.color} 0%, transparent 75%)`,
									}}
								></div>
								<h2 className="self-center col-span-3">
									{!item.url ? (
										<span>{upperFirstLetter(name)}</span>
									) : (
										<a
											href={item.url}
											target="_blank"
											className="no-underline hover:underline font-bold"
										>
											{upperFirstLetter(name)}
										</a>
									)}
									<span
										className={`inline-block w-max text-xs font-medium px-2 py-1 rounded-full -translate-y-1 ml-2 shadow-lg ${TypeColors[item.type].Shadow} ${TypeColors[item.type].Text} ${TypeColors[item.type].Background}`}
									>
										{item.type}
									</span>
								</h2>
								<div className="w-fit size-16 col-start-4 justify-self-end">
									<item.iconSVG className="size-full aspect-square" />
								</div>
								<div className="col-span-4">
									{(Array.isArray(item.description)
										? item.description
										: [item.description]
									).map((text) => (
										<p key={name}>{text}</p>
									))}
								</div>
							</div>
						</CarouselItem>
					})}
				</CarouselContent>
				<Button
					size="icon"
					variant="outline"
					className="absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2"
					onClick={() => goPrev()}
				>
					<ArrowLeft />
				</Button>
				<Button
					size="icon"
					variant="outline"
					className="absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2"
					onClick={() => goNext()}
				>
					<ArrowRight />
				</Button>
			</Carousel>
			<div className="flex gap-3 items-center max-w-lg mx-auto my-4">
				<div className="grow bg-border h-px"></div>
				<p className="text-primary/75">{selectBtnLabel}</p>
				<div className="grow bg-border h-px"></div>
			</div>
			<div className="flex max-w-lg mx-auto gap-1 flex-wrap">
				{knowledgeKeys.map((name, i) => {
					const item = t(name)

					return <Button
						className="size-9.75"
						variant="outline"
						key={name}
						onClick={() => goToIndex(i)}
					>
						<item.iconSVG className="aspect-square size-6"></item.iconSVG>
					</Button>
				})}
			</div>
		</>
	);
}
