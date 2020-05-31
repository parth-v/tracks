import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, link, routeName }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
			<Spacer>
				<Text style={styles.link}> 
					{link}
				</Text>  
			</Spacer>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	link: {
		textAlign: 'center',
		color: 'blue'
	}
}); 

export default withNavigation(NavLink);