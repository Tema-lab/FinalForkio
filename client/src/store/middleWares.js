import * as actions from "./types";
import {logIn} from "./actions";
import axios from "axios";

const SERVER_URL = `http://localhost:3000/`

export const appMiddleWare = ()=> next =>action=>{
    next(action);
    switch (action.type){
        case actions.LOGIN_SUCCESS:{
            next(
                apiRequest({
                    url:`${SERVER_URL}/login`,
                    method:"POST",
                    data:action.payload
                })
            );
            break;
        }
        default:break;
    }
}
