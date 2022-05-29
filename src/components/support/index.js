import React from "react";
import { Image, View } from "react-native";
import Text from "../text";
import { styles } from "./styles";

const Support = () => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View style={styles.image}>
					<Image source={require("../../../assets/woman.png")} />
				</View>
				<View style={styles.content}>
					<Text preset="h2">Do you own test!</Text>
					<Text>Follow the instructions to do your own test.</Text>
				</View>
			</View>
		</View>
	);
};

export default Support;
