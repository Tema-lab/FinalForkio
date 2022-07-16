import React from "react";
import s from "./Search.module.scss";

const Search = () => {
    return (
        <div className={s.search__wrapper}>
            <input type="search" placeholder="Пошук меблів" className={s.input}/>
            <button className={s.search__btn}>
                <i className="material-icons">search</i>
            </button>
        </div>
    );
};
export default Search;
