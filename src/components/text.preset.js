import { colors } from "../theme/colors";

const BASE = {
	fontSize: 14,
};

const TITLE = {
	fontSize: 24,
	fontWeight: "600",
	color: colors.white,
};

const SUBTITLE = {
	fontSize: 20,
	fontWeight: "600",
	color: colors.white,
};

const MEDIUM = {
	fontSize: 16,
	fontWeight: "500",
	color: colors.white,
};
const SUBMEDIUM = {
	fontSize: 20,
	fontWeight: "500",
	color: colors.black,
};

export const presets = {
	default: {
		...BASE,
		color: colors.white,
		fontWeight: "400",
	},
	h1: TITLE,

	h2: SUBTITLE,

	h5: MEDIUM,
	h6: SUBMEDIUM,
	p: {
		...BASE,
		color: colors.black,
		fontWeight: "500",
	},
};
