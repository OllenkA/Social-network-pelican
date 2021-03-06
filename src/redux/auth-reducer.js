import {authApi} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthTC = () => async (dispatch) => {
    let data = await authApi.getAuth();
    // return authApi.getAuth().then data => {
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    // else {
    //     dispatch(setAuthUserData(null, null, null, false));
    // }
};

export const loginTC = (email, password, rememberMe) => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe);
    if (data.data.resultCode === 0) {
        dispatch(getAuthTC());
    } else {
        let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logoutTC = () => async (dispatch) => {
    let data = await authApi.logout();
    if (data.data.resultCode === 0) {
        // dispatch(getAuthTC(null, null, null, false)
        dispatch(setAuthUserData(null, null, null, false));
    }
};


export default authReducer;