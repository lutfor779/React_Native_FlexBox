import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 35,
	},
	menu: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		paddingTop: 45,
	},
	optioins: {
		backgroundColor: colors.white,
		flexDirection: "row",
		padding: 8,
		width: 100,
		justifyContent: "space-between",
		borderRadius: 50,
	},
	content: {
		paddingBottom: 20,
	},
	text: {
		paddingVertical: 12,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 32,
	},
	button: {
		flexDirection: "row",
		width: 155,
		paddingHorizontal: 25,
		paddingVertical: 15,
		borderRadius: 77.5,
		justifyContent: "space-between",
	},
});
