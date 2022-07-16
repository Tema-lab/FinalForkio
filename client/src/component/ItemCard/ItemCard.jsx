import React from "react";
import style from "./ItemCard.module.scss";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  const {
    price,
    name,
    url,
    source,
    text,
    isOnSale,
    isNew,
    discount = 20,
    isWithCart,
    btnHandle,
  } = props;
  return (
    <Link to={url} className={style.cardContainer}>
      <div className={style.imgWrapper}>
        <img src={source} alt={text} className={style.cardContainer__img} />
        {isOnSale && <span className={style.sale}>Знижка</span>}
        {isNew && <span className={style.latest}>Новинка</span>}
      </div>
      <h3 className={style.cardTitle}>{name}</h3>
      <div className={style.priceContainer}>
        {isOnSale && (
          <>
            <span
              className={`${style.priceContainer__value} ${style["priceContainer__value-red"]}`}>
              {Math.floor((price * (100 - discount)) / 100)}
            </span>
            <span
              className={`${style.priceContainer__currency} ${style["priceContainer__currency-red"]}`}>
              грн
            </span>
          </>
        )}
        <span
          className={`${style.priceContainer__value} ${
            isOnSale ? style.priceContainer__strikeout : ""
          }`}>
          {price}
        </span>

        <span
          className={`${style.priceContainer__currency} ${
            isOnSale ? style["priceContainer__currency-grey"] : ""
          }`}>
          грн
        </span>
      </div>
      {isWithCart && (
        <button className={style.withCart} onClick={btnHandle}>
          <span className={`${style.withCart__text} ${style.pseudo}`}>
            У кошик
          </span>
        </button>
      )}
    </Link>
  );
};
export default ItemCard;
