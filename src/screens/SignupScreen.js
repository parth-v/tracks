import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
	const { state, signup, clearErr } = useContext(AuthContext);

	return(
		<View style={ styles.container }>
			<NavigationEvents 
				onWillFocus={clearErr}
			/>
			<AuthForm 
				headerText="Sign Up for Tracker"
				submitButtonTitle="Sign Up"
				errMessage={state.errMessage}
				onSubmit={signup}
			/>
			<NavLink 
				link = "Already have an account? Sign In instead!"
				routeName = "Signin"
			/>
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
	}
});

export default SignupScreen;