import * as player from "./actionTypes";

const getPlayersRequest=()=>{
    return {type:player.PLAYERREQUEST};
}

const getPlayersSuccess=(data)=>{
    return {type:player.PLAYERSUCCESS,payload:data};
}

const getPlayersFailure=()=>{
    return {type:player.PLAYERFAILURE};
}

const getPlayers=()=>{
    return (dispatch)=>{
        dispatch(getPlayersRequest());
        fetch("http://localhost:8080/game").then((res)=>res.json()).then((res)=>dispatch(getPlayersSuccess(res.players))).catch((err)=>dispatch(getPlayersFailure()));
    }
};

const settPlayer=(data)=>{
    return (dispatch)=>{
        dispatch({type:player.PLAYERDETAILS,payload:data});
    }
};

const settPlayerResult=(data)=>{
    return (dispatch)=>{
        dispatch({type:player.PLAYERRESULTS,payload:data});
    }
};

export {getPlayers,settPlayer,settPlayerResult};