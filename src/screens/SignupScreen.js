import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	return(
		<View style={ styles.container }>
			<AuthForm 
				headerText="Sign Up for Tracker"
				submitButtonTitle="Sign Up"
				errMessage={state.errMessage}
				onSubmit={signup}
			/>
			<TouchableOpacity>
				<Spacer>
					<Text 
						style={styles.link}
						onPress={() => navigation.navigate('Signin')}
					> 
						Already have an account? Sign in instead
					</Text>  
				</Spacer>
			</TouchableOpacity>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 70
	},
	link: {
		textAlign: 'center',
		color: 'blue'
	}
});

export default SignupScreen;