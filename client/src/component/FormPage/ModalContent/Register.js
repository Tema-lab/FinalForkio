import React,{useState,useEffect} from "react";
import {useHttp} from "../../../hooks/http.hook";
import {useMessage} from "../../../hooks/message.hook";

const Login = () =>{
    const [form,setForm] = useState({
        email:'',
        password:'',
        name:''
    })
    const {loading,request,error,clearError} = useHttp();
    const message = useMessage();

    useEffect((error)=>{
        message(error);
    },[error])


    const changeHandler = (event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    const registerHandler = async ()=>{
        try{
            if(error.length > 0){
                clearError();
            }
            const data = await request("/api/auth/register", "POST",{...form});
            console.log("Data",data);

        }catch (e){
            console.log(e.message);
        }
    }

    return(
        <>
            <div className="input-container input">
                <span className="input-container__text">Ім'я</span>
                <input name="name" type="text" className= "input-span"  placeholder="Ваше ім'я" onChange={changeHandler} disabled={loading} />

                <span className="input-container__text">Прізвище</span>
                <input name="surname" type="text" className= "input-span"  placeholder="Ваше прізвище" onChange={changeHandler} disabled={loading} />

                <span className="input-container__text">E-mail</span>
                <input name="email" type="text" className= "input-span"  placeholder="E-mail" onChange={changeHandler} disabled={loading} />

                <span  className="input-container__text">Пароль</span>
                <input name="password" type="password" className= "input-span" placeholder="Пароль" onChange={changeHandler} disabled={loading}/>

                <span className="input-container__text">Підтвердження пароля</span>
                <input name="password" type="password" className= "input-span"  placeholder="Пароль" onChange={changeHandler} disabled={loading} />

            </div>
            <button className="password-remind">Нагадати пароль</button>
            <div className="sign-in-btn-container">
                <button className="sign-in-btn" onClick={registerHandler} disabled={loading} ><span className="sign-in-btn__text">Зарегуватися</span></button>
            </div>
            {error.length > 0 && <div className="error">{error}</div>}

        </>

    )
}
export default Login;

