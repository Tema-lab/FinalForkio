import React, {useState} from "react";
import FacebookImg from "../FaceBookImg/FaceBookImg";
import InstagramImg from "../InstagramImg/InstagramImg";
import {useHttp} from "../../../hooks/http.hook";
import{useDispatch} from "react-redux";
import * as types from "../../../store/types"

const Login = () =>{
    const dispatch = useDispatch();
    const [form,setForm] = useState({
        email:'',password:''
    });
    const {loading,request,error} = useHttp();

    const getUserRequest = ()=>{
             return async function(dispatch){
                 const response = await request("http://localhost:3000/api/auth/login","post",{...form});
                 console.log(response.user.name);
                 dispatch({type:types.USER_LOADED,payload:response.user});
             }
         }

    const changeHandler = (event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    const loginHandler = async ()=>{
           dispatch(getUserRequest());
    }

    return(
        <>
            <h3 className="modal-wrapper__title">Будь ласка, введіть дані свого облікового запису, щоб увійти</h3>
            <div className="input-container input">
                <span className="input-container__text" >E-mail</span>
                <input name="email" type="text" className= "input-span"  placeholder="E-mail" onChange={changeHandler} disabled={loading} required />
                <span  className="input-container__text">Пароль</span>
                <input name="password" type="password" className= "input-span" placeholder="Пароль" onChange={changeHandler} disabled={loading} required/>
            </div>
            <button className="password-remind">Нагадати пароль</button>
            <div className="sign-in-btn-container">
                <button className="sign-in-btn" onClick={loginHandler} disabled={loading} ><span className="sign-in-btn__text">Увійти</span></button>
            </div>
            {error.length > 0 && <div className="error">{error}</div>}
            <div className="lines-wrapper"><h3 className="lines">або</h3></div>
            <div className="sign-in-with">
                <button className="sign-in-with__btn facebook">
                    <FacebookImg/>
                    <p className="facebook__text">Увійти через Facebook</p>
                </button>
                <button className="sign-in-with__btn instagram">
                    <InstagramImg/>
                    <p className="instagram__text">Увійти через Instagram</p>
                </button>
            </div>
        </>

)
}
export default Login;