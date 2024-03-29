import {SIGN_IN,SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {                     //Capitalize cannot be changed in  engineering...
    isSignedIn:null,
    userId:null,
};  

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state,isSignedIn: true, userId: action.payload};             //Update UserId -->coming from action
        case SIGN_OUT:
            return {...state,isSignedIn:false, userId: null};
        default:
            return state;
    }
};