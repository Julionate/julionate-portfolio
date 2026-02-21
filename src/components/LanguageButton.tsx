import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ui } from "@/data/ui";
import { upperFirstLetter } from "@/lib/upperFirstLetter";
import { useTranslation } from "@/lib/useTranslation";
import type { availableLocalesByCode, LocaleWithUrl } from "@/types/Locales";

type Props = {
	locales: LocaleWithUrl[];
	lang: availableLocalesByCode;
};

export function LanguageButton({ locales, lang }: Props) {
	const t = useTranslation(lang, ui);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<Languages />
					<span>{t("header.languageButton")}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuGroup>
					{locales.map((item) => (
						<DropdownMenuItem className="p-0" key={item.code}>
							<a className="size-full p-1.5" href={item.url}>
								{upperFirstLetter(item.name)}
							</a>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
