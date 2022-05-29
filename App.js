import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Home from "./src/screens/home";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Home />
			<StatusBar hidden />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
