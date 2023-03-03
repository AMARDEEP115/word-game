import * as words from "./actionTypes";

const getWordsRequest=()=>{
    return {type:words.WORDSREQUEST};
}

const getWordsSuccess=(data)=>{
    return {type:words.WORDSSUCCESS,payload:data};
}

const getWordsFailure=()=>{
    return {type:words.WORDSFAILURE};
}

const getRandomWords=()=>{
    return (dispatch)=>{
        dispatch(getWordsRequest());
        fetch("http://localhost:8080/random").then((res)=>res.json()).then((res)=>dispatch(getWordsSuccess(res.words))).catch((err)=>dispatch(getWordsFailure()));
    }
};

export default getRandomWords;