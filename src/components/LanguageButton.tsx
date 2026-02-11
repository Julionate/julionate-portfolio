import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getLang } from "@/lib/getLang";
import type { Language } from "@/types/Languages";

interface Props {
	buttonText: string;
	locales: Language[];
}

export function LanguageButton({ buttonText, locales }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<Languages />
					<span>{buttonText}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuGroup>
					{locales.map((locale) => (
						<DropdownMenuItem className="p-0" key={locale.code}>
							<a className="size-full p-1.5" href={locale.url}>
								{getLang(locale.code)}
							</a>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
