import { useMemo } from "react";

const getColorTranslation = (description: string) => {
	const words = description.toLowerCase().split(" ");

	for (const word of words) {
		switch (word) {
			case "red":
				return "Red";
			case "blue":
				return "Blue";
			case "white":
				return "White";
			case "grey":
			case "gray":
				return "Grey";
			case "black":
				return "Black";
			case "gold":
				return "Gold";
			case "pink":
				return "Pink";
			case "sleek":
				return "Sleek";
		}
	}

	return null;
};

const useColorTranslation = (color: string) => {
	const colorTranslation = useMemo(() => getColorTranslation(color), [color]);
	return colorTranslation;
};

export default useColorTranslation;
