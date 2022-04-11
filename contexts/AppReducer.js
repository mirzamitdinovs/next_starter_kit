export const initialState = {
	greetings: 'welcome',
};

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'initial_stored': {
			return action.value;
		}
		case 'change_language': {
			return {
				...state,
				lang: action.value,
			};
		}
	}
};
