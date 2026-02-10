import type { Variants } from "motion/react";
import { motion as M, stagger } from "motion/react";
import { useState } from "react";

interface Props {
	title: string;
	subtitle: string;
}

export function HeroWelcome({ title, subtitle }: Props) {
	const titleLength = title.length;

	const [finish, setFinish] = useState<boolean>(false);

	const rangeTo = 50;
	const rangeFrom = rangeTo * -1;
	const step = (rangeTo * 2) / titleLength - 1;

	const TitleVariants: Variants = {
		hidden: {
			y: 0,
			transition: { when: "beforeChildren" },
		},
		visible: {
			y: 0,
			transition: { delayChildren: stagger(0.1), when: "afterChildren" },
		},
	};

	const LetterVariants: Variants = {
		hidden: (i) => ({
			opacity: 0,
			y: 20,
			x: i,
			scale: 1.2,
			filter: "blur(5px)",
		}),
		visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: "none" },
	};

	return (
		<>
			<M.h1
				aria-label="Julionate"
				variants={TitleVariants}
				className="text-5xl sm:text-8xl font-bold"
				initial="hidden"
				animate="visible"
				onAnimationComplete={() => {
					console.log("finished");
					setFinish(true);
				}}
			>
				{title.split("").map((letter, i) => (
					<M.span
						key={letter + (i + 1)}
						custom={rangeFrom + i * step}
						variants={LetterVariants}
						className="inline-block"
					>
						{letter}
					</M.span>
				))}
			</M.h1>
			<M.p
				aria-label="Apprentice of Everything"
				className="text-xl sm:text-2xl text-center origin-top"
				initial={{ height: 0, opacity: 0, scale: 0 }}
				animate={
					finish
						? {
								height: "auto",
								opacity: 1,
								scale: 1,
							}
						: {}
				}
			>
				{subtitle}
			</M.p>
		</>
	);
}
