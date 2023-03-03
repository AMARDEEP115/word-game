import * as words from "./actionTypes";

const initialState={
    isLoading:false,
    words:[],
    isFailure:false
};

const Reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case words.WORDSREQUEST: return {...state,isLoading:true};
        case words.WORDSSUCCESS: return {...state,isLoading:false,words:payload};
        case words.WORDSFAILURE: return {...state,isLoading:false,isFailure:true};
        default : return state;
    }
}

export {Reducer};