import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch(action.type) {
		case 'signup': 
			return { errMessage: '', token: action.payload }; 
		case 'add_err': 
			return { ...state, errMessage: action.payload }; 
		default: 
			return state;
	};
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signup', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signup', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		dispatch({ type: 'add_err', payload: 'Something went wrong!' });
	}
};

const signin = (dispatch) => {
	return ({ email, password }) => {

	};
};

const signout = (dispatch) => {
	return () => {

	};
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout},
	{ token: null, errMessage: '' }
);