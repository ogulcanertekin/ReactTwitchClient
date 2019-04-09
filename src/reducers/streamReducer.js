import _ from 'lodash'; 
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload,'id')};       //Statedeki tüm Key Value seklinde olusturulmus verileri aldıktan sonra, Lodash mapKeys fonksiyonu array içerisindeki objelerin içinde bulunan ve 2. parametrede belirtilen propertye göre her bir objeye bir Key degeri atıyor...[1 :{id:1,name:hi},2:{id:2,name:hello}].Daha sonra da ... ile tüm bu verileri önceki  state datalarının üzerine ekler...Yani yeni eklenen bir  data varsa api istek yapıldıgında bunu anlayacak ve statee bunu ekleyerek güncelleyecek...Performans açısından da elverişli...
        case FETCH_STREAM:                                              //önceki state degelerine yeni bir Key->apidan gelen response un idsi olacak şekilde,value ise response data(action requestden gelen) ekliyoruz.
            return {...state,[action.payload.id]: action.payload};      //Object Based Approach-->Key-Value Interpolation ES6-->Inspected source code of react--> we cant mutation real state! just update and return new object..
        case CREATE_STREAM:
            return {...state,[action.payload.id]: action.payload};   
        case EDIT_STREAM:
            return {...state,[action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state,action.payload);                        //Omit yeni bir object olusturma görevini kendisi yapıyor.    
        default:
            return state;
    }
};