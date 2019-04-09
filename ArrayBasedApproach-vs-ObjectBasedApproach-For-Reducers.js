//ARRAY BASED... UPDATE STATE With StreamId

const streamReducer = (state=[], action) => {           //Action.payload bize api dan editlenmiş veriyi döndürecek...
    switch(action.type){
        case EDIT_STREAM:
            return state.map(stream => {                //state dizisi içerisinde actiondan dönen editlenmis veri id ile bulunarak state içerisinde güncellenecek... 
                if(stream.id===action.payload.id){      
                    return action.payload;
                }else{
                    return stream;
                }
            });
        default:
            return state;
    }
};

//Object Based- Update with Key,value

const streamReducer = (state={}, action) => {
    switch(action.type) {
        case EDIT_STREAM:
            // const newState = {...state};                        //Create new object --> Inspected source code of react--> we cant mutation real state! just update and return new object..
            // NewState[action.payload.id] = action.payload;       //Key, value update. // Yeni state objesini key olarak update den dönen stream idsi atayarak olusturuyoruz.  
            // return newState;
            return {...state,[action.payload.id]:action.payload};      //ES6 REFACTOR - Key Interpolation syntax
        default:
            return state;
    }
};
