import React from "react";
import style from "./interested.module.scss";

import img1 from "../ItemCard/img/img1.png";
import img2 from "../ItemCard/img/img2.png";
import img3 from "../ItemCard/img/img3.png";
import img4 from "../ItemCard/img/img4.png";
import ItemCard from "../ItemCard/ItemCard";


const Interested = (props)=>{


    return(
        <div className={style.container}>
            <h2 className={style.items__title}>Вас також можуть зацікавити</h2>
            <ul className={style.itemContainer}>
                <li className={style.itemContainer__item}><ItemCard  url={'/'} text = {"Комод"} name={'Комод із' +
                ' дубового щита' +
                ' БЕНЕТ'} price={14519} source={img1}/></li>
                <li className={style.itemContainer__item}><ItemCard url={'/'} text = {"Ліжко"} name={'Ліжко ЕЛІС з ортопедичними' +
                ' ламелями'} price={7882} source={img2}/></li>
                <li className={style.itemContainer__item}><ItemCard isOnSale url={'/'} text = {"Етажерка"} name={'Етажерка' +
                ' ДРЕЗДЕН з шухлядами'} price={12552} source={img3}/></li>
                <li className={style.itemContainer__item}><ItemCard isNew   url={'/'}  text = {"ТВ-Тумба"} name={'ТВ-Тумб із' +
                ' дубового щита' +
                ' БЕРГАМО'} price={1992} source={img4}/></li>

            </ul>
        </div>
    )
}
export default Interested;