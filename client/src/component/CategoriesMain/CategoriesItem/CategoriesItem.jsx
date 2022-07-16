import React from 'react';
import {Link} from "react-router-dom";
import s from './CategoriesItem.module.scss'

const CategoriesItem = ({url, text, title, img}) => {

    return (
        <Link to={url} className={s.component}>
            <div className={s.info}>
                <h4 className={s.title}>{title}</h4>
                <p className={s.text}>{text}</p>
            </div>
            <img src={img} alt="Category" className={s.img}/>
        </Link>
    );
};

export default CategoriesItem;