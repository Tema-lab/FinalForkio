import React, { useEffect, useState } from "react";
import "./ItemInfo.scss";
import Interested from "../interestedComponent/interested";
import Button from "../Cart/Button/Button";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  CHECK_AND_ADD_TO_CART,
  SHOW_MODAL,
  CLOSE_MODAL,
} from "../../store/types";
import { useParams } from "react-router-dom";

const ItemInfo = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isOpen);

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const [count, setCount] = useState(1);

  const countMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return false;
    }
  };

  const { id } = useParams();
  const items = useSelector((state) => state.items.data);
  const cartId =
    items.find(function (e) {
      return e.article === id;
    }) || {};

  const {
    name,
    imageUrls = [],
    article,
    currentPrice,
    sizes = {},
    characteristics = {},
    color = [],
  } = cartId;
  const { type = {}, material = [] } = characteristics;

  const [colorValue, setColorValue] = useState("");
  const [obbivkaValue, setObbivkaValue] = useState("");

  useEffect(() => {
    setColorValue(color[0]);
  }, [color]);

  useEffect(() => {
    setObbivkaValue(material[0]);
  }, [material]);

  const colorChange = (e) => {
    setColorValue(e.target.value);
  };

  const obbivkaChange = (e) => {
    setObbivkaValue(e.target.value);
  };

  const addToCart = (data) => {
    dispatch({ type: CHECK_AND_ADD_TO_CART, payload: data });
  };

  return (
    <div className="info__container">
      <p className="info__breadcrumbs">
        <a className="info__breadcrumbs-a" href="/main">
          Головна
        </a>{" "}
        Кошик
      </p>

      <h1>{name}</h1>

      <div className="info__main">
        <img className="info__img" src={imageUrls[0]} alt="" />

        <div>
          <p className="info__prices">
            <span className="info__price">
              {currentPrice}
              <span className="info__price-hrn"> грн</span>
            </span>
            <span className="info_code">Код: {article}</span>
          </p>
          <p className="info__description">
            Особливістю моделі стільця «Урбано» є його сучасний дизайн, який
            стане чудовим акцентом у Вашій оселі. Виріб має надійну конструкцію,
            а також є ергономічним. Стілець «Урбано» виготовлено з екологічно
            чистого масиву дуба. Гарантія від виробника – 2 роки.
          </p>
          <p className="info__sizes__title">Габарити</p>
          <p className="info__sizes">
            Висота {sizes.height} см; Ширина {sizes.warticleth} см; Довжина{" "}
            {sizes.length} см
          </p>
          <p className="info__characteristics__title">Характеристики</p>
          <div className="info__characteristics">
            <span className="info__characteristics__text-grey">Тип</span>
            <span className="info__characteristics__text-black">
              {characteristics.type}
            </span>
            <span className="info__characteristics__text-grey">Покриття</span>
            <span className="info__characteristics__text-black">
              Більше 20 варіантів фарбування (лляна олія, олія-віск, безбарвний
              лак, тонований лак, RAL).
            </span>
            <span className="info__characteristics__text-grey">Оббивка</span>
            <span className="info__characteristics__text-black">
              Тканина або шкірзам на вибір наступних торгових марок:
              «ЕксімТекстіль», «Аппарель».
            </span>
            <span className="info__characteristics__text-grey">Упаковка</span>
            <span className="info__characteristics__text-black">
              Картонна коробка: 2шт. в 1 коробці;
              <p className="info__characteristics__p">
                Вага брутто коробки – 16 кг;
              </p>
              <p className="info__characteristics__p">
                Об'єм коробки – 0,33м3;
              </p>
              <p className="info__characteristics__p">
                Розмір коробки – 62х68х120см.
              </p>
            </span>
          </div>
          <hr className="info__line"></hr>
          <div className="info__materials">
            <span className="info__characteristics__title">Обрати колір</span>
            <span className="info__characteristics__title">Обрати оббивку</span>
            <select value={colorValue} onChange={colorChange}>
              {color.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <select value={obbivkaValue} onChange={obbivkaChange}>
              {material.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="info__count">
            <div className="info__count__block">
              <span className="info__count__title">Кількість</span>
              <div className="info__count__calculator">
                <button
                  className="card__count-btn"
                  onClick={() => {
                    countMinus();
                  }}>
                  <span className="card__count">-</span>
                </button>
                <span className="card__count-name">{count}</span>
                <span className="card__count--grey">шт</span>
                <button
                  className="card__count-btn"
                  onClick={() => setCount(count + 1)}>
                  <span className="card__count">+</span>
                </button>
              </div>
            </div>
            <Button
              className="cart__checkout-btn"
              onClick={() => {
                addToCart({
                  id,
                  count,
                  color: colorValue,
                  obbivka: obbivkaValue,
                });
                showModal();
              }}
              text={"У Кошик"}
            />
            {isOpen && <Modal closeButton={true} closeModal={closeModal} />}
          </div>
        </div>
      </div>

      <Interested />
    </div>
  );
};

export default ItemInfo;
