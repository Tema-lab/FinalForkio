import React from "react";
import "./Modal.scss";
import Card from "../Cart/Card/Card";
import { useSelector } from "react-redux";
import { amountSum } from "../../store/actions";
import Button from "../Cart/Button/Button";

const Modal = (props) => {
  const { closeModal, closeButton, actions } = props;
  const items = useSelector((state) => state.items.data);
  const cart = items.filter((item) => item.quantity);

  const amount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { info: action, data: item } = useSelector((state) => state.modal);

  //считаем общую сумму товаров в корзине
  const cartDataSumTotal = (arr) =>
    arr.reduce(
      (sum, { currentPrice, quantity }) => sum + currentPrice * quantity,
      0
    );
  const cartDataPriceSum = cartDataSumTotal(items);

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <header className="modal__content-header">
          <div>
            Товар доданий у кошик{" "}
            <a className="modal__content-header__link" href="/cart">
              Перейти у кошик
            </a>
          </div>
          {closeButton && (
            <div onClick={closeModal} className="modal__close-btn">
              &times;
            </div>
          )}
        </header>
        <div>
          <p className="modal__cart">
            <table className="cart__checkout">
              {cart.map((item) => {
                return <Card key={item.article} item={item} />;
              })}
            </table>
          </p>
          <div className="modal__cart__text">
            Всього у кошику {amount} товари на суму
            <span className="cart__checkout-text--big">
              {cartDataPriceSum} грн
            </span>
          </div>
          <div className="cart__checkout-container">
            <span className="modal__checkout" onClick={closeModal}>
              Продовжити покупки
            </span>
            <Button
              className="cart__checkout-btn modal__btn"
              onClick={() => {
                window.location.href = "/order";
              }}
              text={"Оформити замовлення"}
            />
          </div>
          <div className="modal__buttons">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
