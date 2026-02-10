export const upperFirstLetter = (string: string): string => {
	try {
		return string.split("")[0].toUpperCase() + string.slice(1);
	} catch {
		return string;
	}
};
