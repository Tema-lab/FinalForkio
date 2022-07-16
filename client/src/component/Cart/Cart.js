import React from "react";
import "./Cart.scss";
import Card from "./Card/Card";
import { getCart } from "../../store/actions";
import { useSelector } from "react-redux";
import Button from "./Button/Button";
import Interested from "../interestedComponent/interested";
import { amountSum } from "../../store/actions";

const Cart = () => {
  const items = useSelector((state) => state.items.data);
  const cart = items.filter((item) => item.quantity);
  const amount = cart.reduce((acc, item) => acc + item.quantity, 0);

  //считаем общую сумму товаров в корзине
  const cartDataSumTotal = (arr) =>
    arr.reduce(
      (sum, { currentPrice, quantity }) => sum + currentPrice * quantity,
      0
    );
  const cartDataPriceSum = cartDataSumTotal(items);

  return (
    <div className="cart__container">
      <p className="cart__breadcrumbs">
        <a className="cart__breadcrumbs-a" href="/main">
          Головна{" "}
        </a>{" "}
        Кошик{" "}
      </p>
      <p>
        <h2 className="cart__heading"> Кошик </h2>{" "}
      </p>
      <table className="cart__checkout">
        <tr className="cart__table-nav">
          <th> </th> <th> </th> <th> Назва товару </th>{" "}
          <th className="cart__table-colour"> Колір </th>{" "}
          <th className="cart__table-material"> Оббивка </th>{" "}
          <th> Кількість </th> <th> Ціна </th>{" "}
        </tr>{" "}
        {cart.map((item) => {
          return <Card key={item.article} item={item} />;
        })}{" "}
      </table>
      <div className="cart__checkout-container">
        <span className="cart__checkout-text">
          Всього у кошику {amount} товари на суму{" "}
          <span className="cart__checkout-text--big">
            {" "}
            {cartDataPriceSum}
            грн{" "}
          </span>{" "}
        </span>{" "}
        <Button
          className="cart__checkout-btn"
          onClick={() => {
            window.location.href = "/order";
          }}
          text={"Оформити замовлення"}
        />{" "}
      </div>{" "}
      <Interested />
    </div>
  );
};

export default Cart;
