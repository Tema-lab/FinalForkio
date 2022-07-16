import {useState,useCallback} from "react";

export const useHttp = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    const request = useCallback(async  (url,method = "GET",body = null, headers = {})=>{
        setLoading(true);
        try{
            if(body){
                body = JSON.stringify(body);
            }
            console.log('Body',body);


           const response = await fetch(url,{method,body,headers: {...headers, 'Content-Type': 'application/json'}});
           const data = await response.json();

           if(!response.ok){
               throw new Error(data.message || "Something went wrong");
           }
           setLoading(false)
           return data
        }catch (e){
            console.log('catch', e.message);
            setLoading(false);
            setError(e.message);
            throw e;
        }
    },[])
    const clearError = useCallback(()=>setError(""),[])


    return{loading,request,error,clearError}
}