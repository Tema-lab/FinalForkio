import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss";
import logo from "./img/logo.png";
import user_avatar from "./img/user_avatar.svg";
import cart from "./img/basket.svg";
import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Search";
import {amountSum} from '../../store/actions';
import {useSelector} from "react-redux";
import FormPage from "../FormPage/FormPage";
import {getIsAuthenticated} from "../../store/selectors";
import {getFullUser} from "../../store/selectors";
const Header = ({data}) => {
    const [burger, setBurger] = useState(false);
    const [modalActive,setModalActive] = useState(false);
    const activeBurgerMenu = () => {
        setBurger(!burger);
    };
    const user = useSelector(getFullUser);
    const isAuthenticated = useSelector(getIsAuthenticated);
    const items = useSelector((state) => amountSum(state.items.data))
    return (
        <>
            <header>
                <FormPage/>
                <div className={s.header__container}>
                    <div className={s.header__wrapper}>
                        <NavLink to="/" className={s.logo}>
                            <img src={logo} alt="logo"/>
                            <h1>LORI</h1>
                        </NavLink>

                        <div className={s.tel}>
                            <a href="tel:0931707881">(093) 170-78-81</a>
                            <a href="tel:0931708323">(093) 170-83-23</a>
                        </div>

                        <div className={s.search}>
                            <Search/>
                        </div>

                        <NavLink to="/" className={s.user}>
                            <img src={user_avatar} alt="avatar"/>
                            {isAuthenticated ?
                            <span  onClick={()=>setModalActive(true)}>{user.name}</span>
                                :
                                <span onClick={()=>setModalActive(true)}>Увійти</span>
                            }
                            <FormPage active = {modalActive} setActive = {setModalActive}/>
                        </NavLink>
    
                        <NavLink to="/cart" className={s.cart}>
                            <img src={cart} alt="bac"/>
                            <span>{items}</span>
                        </NavLink>
                    </div>

                    <nav className={`${burger ? s.active : s.menu}`}
                         onClick={document.body.clientWidth < 768 ? activeBurgerMenu : null}>
                        <NavMenu active={burger} data={data}/>
                    </nav>
                </div>

            </header>
        </>
    )
};

export default Header;
