import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		// background: "linear-gradient(269.6deg, #56549E 0.35%, #AEA1E6 101.48%)",
		backgroundColor: "#56549E",
		marginTop: 40,
		borderRadius: 16,
	},
	main: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 8,
	},
	image: {
		marginTop: -15,
	},
	content: {
		flex: 1,
		paddingLeft: 10,
	},
});
