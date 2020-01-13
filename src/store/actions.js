import axios from '../axios/axios'
import * as types from "./types";
export default {
    [types.entertainment]:({commit,state},payload)=>{
       axios({
            url:'/api/yule',
            params:{
                    _limit:10
                }
        }).then(
            res=>{
                commit(types.entertainment,res.data.data)
            }
        )
    },
    [types.finance]:({commit,state},payload)=>{
        axios({
             url:"/api/caijing",
           params:{
               _limit:10
           }
         }).then(
             res=>{
               commit(types.finance,res.data.data)
             }
         )
    },
    [types.newlist]:({commit,state},payload)=>{
        axios(
            {
                url:"/api/home",
                params:{
                    _limit:20
                }
            }
        ).then(
            res=>{
               commit(types.newlist,res.data.data)
            }
        )
    },
    [types.details]:({commit,state},{_id,dataName})=>{
        axios({
            url:"/api/"+dataName+"/"+_id
        }).then(
            res =>{
                commit(types.details,res.data.data)
            }
        )

    }
}
