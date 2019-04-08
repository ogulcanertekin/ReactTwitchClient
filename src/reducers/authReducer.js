import {SIGN_IN,SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {                     //Capitalize cannot be changed in  engineering...
    isSignedIn:null
};  

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state,isSignedIn: true};
        case SIGN_OUT:
            return {...state,isSignedIn:false};
        default:
            return state;
    }
};