import * as players from "./actionTypes";

const initialState={
    isLoading:false,
    name:"",
    level:"",
    correct:0,
    worng:0,
    score:0,
    attempt:0,
    players:[],
    isFailure:false
};

const Reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case players.PLAYERDETAILS: return {...state,name:payload.name,level:payload.level};
        case players.PLAYERRESULTS: return {...state,correct:payload.correct,worng:payload.worng,score:payload.score,attempt:payload.attempt};
        case players.PLAYERREQUEST: return {...state,isLoading:true};
        case players.PLAYERSUCCESS: return {...state,isLoading:false,players:payload};
        case players.PLAYERFAILURE: return {...state,isLoading:false,isFailure:true};
        default : return state;
    }
}

export {Reducer};