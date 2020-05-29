import createDataContext from './createDataContext';

const authReducer = (state, dispatch) => {
	switch(action.type) {
		default: 
			return state;
	}
}

export const { Context, Provider } = createDataContext(
	authReducer,
	{},
	{ isSignedIn: false }
);