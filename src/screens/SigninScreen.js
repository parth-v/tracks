import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
	const { state, signin, clearErr } = useContext(AuthContext);

	return(
		<View style={ styles.container }>
			<NavigationEvents 
				onWillFocus={clearErr}
			/>
			<AuthForm 
				headerText="Sign In to Your Account"
				submitButtonTitle="Sign In"
				errMessage={state.errMessage}
				onSubmit={signin} 
			/>
			<NavLink 
				link = "Do not have an account? Sign up instead!"
				routeName = "Signup"
			/>
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 70
	}
});

export default SigninScreen;