import streams from '../apis/streams';
import {SIGN_IN,SIGN_OUT} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload:userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

/*
export const createStream = (formValues) => {
    return (dispatch) => {

    };
};

*/

//Refactored Code-->Action creator for-> Async Api Request with axios and Redux-Thunk (Because Async...)

export const createStream = formValues => dispatch => {
    streams.post('/streams',formValues);
};