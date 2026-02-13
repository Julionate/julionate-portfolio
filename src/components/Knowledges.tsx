import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Knowledges as Data, TypeColors } from "@/data/knowledges";

type Props = {
	selectBtnLabel: string;
};

export function Knowledges({ selectBtnLabel }: Props) {
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) return;
	}, [api]);

	const goTo = (index: number) => {
		if (!api) return;

		const totalValues = api.scrollSnapList().length;
		if (index > totalValues) return;

		api.scrollTo(index);
	};

	return (
		<>
			<Carousel setApi={setApi} className="mx-auto max-w-lg">
				<CarouselContent>
					{Data.map((item) => (
						<CarouselItem key={item.name}>
							<div className="relative border p-3 rounded-lg grid grid-cols-4 grid-rows-2 h-40 shadow-xs overflow-hidden">
								<div
									className="absolute -z-10 size-96 right-0 dark:opacity-25 opacity-15 pointer-events-none"
									style={{
										backgroundImage: `radial-gradient(circle, ${item.color} 0%, transparent 75%)`,
									}}
								></div>
								<h2 className="self-center col-span-3">
									{!item.url ? (
										<span>{item.name}</span>
									) : (
										<a
											href={item.url}
											target="_blank"
											className="no-underline hover:underline font-bold"
										>
											{item.name}
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
									).map((text, i) => (
										<p key={`${item.name}-${i}`}>{text}</p>
									))}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="flex gap-3 items-center max-w-lg mx-auto my-4">
				<div className="grow bg-border h-px"></div>
				<p className="text-primary/75">{selectBtnLabel}</p>
				<div className="grow bg-border h-px"></div>
			</div>
			<div className="flex max-w-lg mx-auto gap-1 flex-wrap">
				{Data.map((item, i) => (
					<Button
						className="size-9.75"
						variant="outline"
						key={item.name}
						onClick={() => goTo(i)}
					>
						<item.iconSVG className="aspect-square size-6"></item.iconSVG>
					</Button>
				))}
			</div>
		</>
	);
}
