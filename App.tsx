import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
	type Props = {
		title: string;
		onPress: () => void;
		bgColor?: string;
		textColor?: string;
	};

	const CustomButton = (props: Props) => {
		const { bgColor = '#000', onPress, textColor = '#fff', title } = props;

		return (
			<TouchableOpacity
				onPress={onPress}
				style={[
					styles.btn,
					{
						backgroundColor: bgColor,
					},
				]}>
				<Text style={{ color: textColor }}>{title}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<CustomButton
				title='Login'
				onPress={() => console.log('login')}
				bgColor='#efefef'
				textColor='#000'
			/>
			<CustomButton title='LogOut' onPress={() => console.log('LogOut')} />
			<CustomButton title='Pay' onPress={() => console.log('Pay')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn: {
		padding: 10,
		borderRadius: 5,
		width: 150,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
