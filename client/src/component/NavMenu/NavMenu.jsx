import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NavMenu.module.scss";

const NavMenu = ({active, data}) => {
    return (
        <>
            <ul className={active ? s.navMenu__active : s.navMenu__list}>
                {data.map((e) => {
                    return (
                        <li key={e.category.name} className={s.navMenu__item}>
                            <NavLink to={e.category.link} className={s.item__link}>
                                {e.category.name}
                            </NavLink>
                            <ul className={s.navMenu__subList}>
                                {e.product.map((e) => (
                                    <Link text={e.name} to={e.link} key={e.name}/>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </>
    )

};

const Link = ({text, to}) => {
    return (
        <li>
            <NavLink to={`/${to}`} className={s.link}>
                {text}
            </NavLink>
        </li>
    );
};

export default NavMenu;
