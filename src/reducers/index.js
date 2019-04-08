import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';              // Given a name --> formReducer
import authReducer from './authReducer';

export default combineReducers({
    auth:authReducer,    
    form:formReducer                                        //Dont need create any actions redux-form doing this automatically
});