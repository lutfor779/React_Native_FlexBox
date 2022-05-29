import React from "react";
import { Image, View } from "react-native";
import { colors } from "../../theme/colors";
import Text from "../text";
import { styles } from "./styles";

const Header = () => {
	return (
		<View>
			<View style={styles.menu}>
				<Image source={require("../../../assets/icon/menu.png")} />
				<Image source={require("../../../assets/icon/bell.png")} />
			</View>

			<View style={styles.container}>
				<Text preset="h1">Covid-19</Text>

				<View style={styles.optioins}>
					<Image source={require("../../../assets/icon/flag.png")} />
					<Text preset="p">USA</Text>
					<View style={{ alignItems: "center", flexDirection: "row" }}>
						<Image source={require("../../../assets/icon/Vector.png")} />
					</View>
				</View>
			</View>

			<View style={styles.content}>
				<Text preset="h2">Are you felling sick?</Text>
				<Text style={styles.text}>
					If you feel sick with any of covid-19 symptoms please call or SMS us
					immediately for help.
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<View style={[styles.button, { backgroundColor: colors.red }]}>
					<Image source={require("../../../assets/icon/phone.png")} />
					<Text preset="h5">Call Now</Text>
				</View>

				<View style={[styles.button, { backgroundColor: colors.blue }]}>
					<Image source={require("../../../assets/icon/message-circle.png")} />
					<Text preset="h5">Send SMS</Text>
				</View>
			</View>
		</View>
	);
};

export default Header;
