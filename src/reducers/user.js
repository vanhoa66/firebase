
import { LOG_IN, LOG_OUT } from './../constants/ActionTypes'

let defaultState = {
	isLoggin: false,
	info: {
		email: '',
		uid: '',
		website: '',
		isAdmin: false
	}
};

const user = (state = defaultState, action) => {

	switch (action.type) {

		case LOG_IN:
			state.isLoggin = true;
			state.info = action.userInfo;
			return { ...state };

		case LOG_OUT:
			state.isLoggin = false;
			state.info = {
				email: '',
				uid: '',
				website: '',
				isAdmin: false
			};

			return { ...state };

		default:
			return state;
	}
}

export default user;