import React from "react";
import { Image, View } from "react-native";
import Text from "../text";
import { styles } from "./styles";

const Prevention = () => {
	return (
		<View style={styles.container}>
			<Text preset="h6" style={styles.title}>
				Prevention
			</Text>
			<View style={styles.itemContainer}>
				<View style={styles.item}>
					<Image source={require("../../../assets/man.png")} />
					<Text preset="p" style={styles.text}>
						Avoid close contact
					</Text>
				</View>

				<View style={styles.item}>
					<Image source={require("../../../assets/hand.png")} />
					<Text preset="p" style={styles.text}>
						Clean your hands often
					</Text>
				</View>

				<View style={styles.item}>
					<Image source={require("../../../assets/Group.png")} />
					<Text preset="p" style={styles.text}>
						Wear a facemask
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Prevention;
