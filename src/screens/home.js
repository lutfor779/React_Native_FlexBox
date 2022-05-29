import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";
import Prevention from "../components/prevention";
import Support from "../components/support";
import { colors } from "../theme/colors";

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.upper}>
				<Header />
			</View>
			<View>
				<Prevention />
			</View>
			<View>
				<Support />
			</View>
		</View>
	);
};

export default Home;
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flex: 1,
	},
	upper: {
		paddingHorizontal: 24,
		backgroundColor: colors.indigo,
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		marginBottom: 32,
	},
});
