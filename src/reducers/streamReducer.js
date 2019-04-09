import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_STREAM:                                              //önceki state degelerine yeni bir Key->apidan gelen response un idsi olacak şekilde,value ise response data(action requestden gelen) ekliyoruz.
            return {...state,[action.payload.id]: action.payload};      //Object Based Approach-->Key-Value Interpolation ES6-->Inspected source code of react--> we cant mutation real state! just update and return new object..
        case CREATE_STREAM:
            return {...state,[action.payload.id]: action.payload};   
        case EDIT_STREAM:
            return {...state,[action.payload.id]: action.payload};    
        default:
            return state;
    }
};