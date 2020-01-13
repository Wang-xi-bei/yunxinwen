import * as types from "./types";
export default {
    [types.HD]:(state,payload)=>{
        state.hd = payload;
    },
    [types.CT]:(state,payload)=>{
        state.ct = payload;
    },
    [types.FT]:(state,payload)=>{
        state.ft = payload;
    },
    [types.BLOADING ]:(state,payload)=>{
        state.bLoading = payload;
    },
    [types.entertainment ]:(state,payload)=>{
        state.entertainment = payload;
    },
    [types.finance ]:(state,payload)=>{
        state.finance = payload;
    },
    [types.newlist ]:(state,payload)=>{
        state.newlist = payload;
    },
    [types.details ]:(state,payload)=>{
        state.details = payload;
    },
}