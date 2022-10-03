import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
	ViewProps,
	ViewStyle,
} from 'react-native';

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

	type CustomTextInpuntProps = TextInputProps & {
		email?: boolean;
		password?: boolean;
	};
	const CustomTextInput = (props: CustomTextInpuntProps) => {
		const defaultStyle: ViewStyle = {
			backgroundColor: '#efefef',
			padding: 10,
			borderRadius: 5,
			height: 50,
			width: '80%',
		};

		return (
			<TextInput
				{...props}
				style={[defaultStyle, props.style]}
				secureTextEntry={props.password ? true : false}
				keyboardType={props.email ? 'email-address' : 'default'}
				placeholder={
					props.email
						? 'Email'
						: props.password
						? 'Password'
						: 'Default placeholder'
				}
			/>
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

			<CustomTextInput email />
			<CustomTextInput password />
			<CustomTextInput />
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
