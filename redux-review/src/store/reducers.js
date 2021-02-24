export const initialState = {
	textInput: '',
    passwordInput: ''
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_TEXT_INPUT':
			return {
				...state,
				textInput: action.value,
			};
		case 'CHANGE_PASSWORD_INPUT':
			return {
				...state,
				passwordInput: action.password,
			};
		default:
			return state;
	}
};
