import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, dispatch) => {
	switch(action.type) {
		default: 
			return state;
	};
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const response = await trackerApi.post('/signup', { email, password });
			console.log(response.data);
		} catch (err) {
			console.log(err.response.data);
		}
	};
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
	{ isSignedIn: false }
);