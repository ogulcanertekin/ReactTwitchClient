import streams from '../apis/streams';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from './types';

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

export const createStream = formValues =>async (dispatch,getState) => {     // redux thunk special argumant getState --> Storea ulasabilmemizi saglıyor.Ve Stream ile olusturan useri İliskilendirebiliyoruz.Cunku Statelerimize daha onceden signedIn oldugunda userId ekliyoruz.Datayı post ederken userId ekleyebiliyoruz.
    const {userId} = getState().auth;
    const response = await streams.post('/streams',{...formValues,userId});             // Api returns posted data...

    // const userId=getState().auth.userId;
    // const response = await streams.post('/streams',{...formValues,userId:userId});

    dispatch({type:CREATE_STREAM,payload:response.data});   
    
    history.push('/');                  //history obj kullanarak stream post isleminden sonra programming navigation
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({type:FETCH_STREAMS, payload:response.data});
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    
    dispatch({type:FETCH_STREAM, payload:response.data});
};

//PUT REQUEST VS PATCH REQUEST -->
    // PUT --> Update All Properties of a Record 
    //PATCH -->Update Some Properties of a Record
//Put kullandıgımız icin editledigimiz kaydın userIdsini göremedik...Yalnızca bizim gonderdıgımız title & description ile id sabit tutarak kaydı güncelledi.Bu back-end Api response u ile alakalı durum...

export const editStream = (id,formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`,formValues);

    dispatch({type:EDIT_STREAM, payload:response.data});
    history.push('/');
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({type:DELETE_STREAM, payload:id});
    history.push('/');
};