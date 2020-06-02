import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, submitButtonTitle, onSubmit, errMessage }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Spacer>
				<Text h3>{headerText}</Text>
			</Spacer>
			<Spacer />
			<Input 
				label="Email"
				autoCorrect = { false }
				autoCapitalize = "none" 
				value = { email }
				onChangeText = { setEmail }
			/>
			<Input 
				secureTextEntry
				label="Password"
				autoCorrect = { false }
				autoCapitalize = "none"
				value = { password }
				onChangeText = { setPassword }
			/>
			<Spacer>
				<Button title={submitButtonTitle} onPress={() => onSubmit({ email, password })} />
			</Spacer>
			{	
				errMessage 
				? <Text style={styles.errStyle}>
						{errMessage}
				  </Text> 
				: null
			}
		</>
	);
};

const styles = StyleSheet.create({
	errStyle: {
		color: 'red',
		textAlign: 'center'
	}
});

export default AuthForm;