
import * as types from './../constants/ActionTypes';

export const logIn = (userInfo) => { return { type: types.LOG_IN, userInfo } };
export const actLogOut = () => { return { type: types.LOG_OUT } };
export const actChangeNotify = (style, title, content) => {
	return {
		type : types.CHANGE_NOTIFY,
		style, title, content
	}
}

export const actHideNotify = () => {
	return {
		type : types.HIDE_NOTIFY,
	}
}