import React,{useState,useEffect} from "react";
import "./FormPage.scss";
import closeBtn from "./closeBtn/img.png"
import Login from "./ModalContent/Login";
import Register from "./ModalContent/Register";
import {Tabs,Tab,AppBar} from "@material-ui/core";

const FormPage = (props)=>{
    const {active,setActive} = props;
    const [selectedTab,setSelectedTab] = React.useState(0);

    const handleChange = (e,newValue)=>{
        setSelectedTab(newValue);
    }

    return(
        <div className={active ? "modal-wrapper active" : "modal-wrapper"} >
            <div className="modal__close" onClick={()=>setActive(false)}></div>
            <div className="modal-wrapper__content" >
                <span className="close-modal-btn"><img src={closeBtn} alt="close-btn" width="15px" height="16px" onClick={()=>setActive(false)}/></span>
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Login"  />
                    <Tab label="Register"/>
                </Tabs>
                {selectedTab === 0  && <Login /> }
                {selectedTab === 1 && <Register/>}
            </div>
        </div>
    )
}

export default FormPage;


