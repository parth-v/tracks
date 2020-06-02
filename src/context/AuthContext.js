import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch(action.type) {
		case 'signin': 
			return { errMessage: '', token: action.payload }; 
		case 'add_err': 
			return { ...state, errMessage: action.payload };
		case 'clear_err':
			return { ...state, errMessage: '' }; 
		case 'signout':
			return { token: null, errMessage: '' };
		default: 
			return state;
	};
};

const tryAutoSignIn = dispatch => async () => {
	const token = await AsyncStorage.getItem('token');
	if(token) {
		dispatch({ type: 'signin', payload: token });
		navigate('TrackList');
	} else {
		navigate('loginFlow');
	}
};

const clearErr = dispatch => () => {
	dispatch({ type: 'clear_err' });
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signup', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		dispatch({ type: 'add_err', payload: 'Something went wrong with Sign Up!' });
	}
};

const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signin', { email, password });
		await AsyncStorage.setItem('token',response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		dispatch({ type: 'add_err', payload: "Something went wrong with Sign In!"});
	}
};

const signout = (dispatch) => async () => {
	try {
		await AsyncStorage.removeItem('token');
		dispatch({ type: 'signout' });
		navigate('loginFlow');
	} catch(err) {
		console.log(err);
	}
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErr, tryAutoSignIn },
	{ token: null, errMessage: '' }
);