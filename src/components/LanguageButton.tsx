import { Button } from "@/components/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/components/ui/dropdown-menu";
import type { Language } from "@/types/Languages";
import { getLang } from "@/utils/getLang";

interface Props {
	buttonText: string;
	locales: Language[];
}

export function LanguageButton({ buttonText, locales }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{buttonText}</Button>
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
