import React from "react";
import s from "./Order.module.scss";
import { useState, useEffect } from "react";

import CustomSelect from "./CustomSelect/CustomSelect";

import { useSelector } from "react-redux";
import Element from "./Element";

import Modal from "@material-ui/core/Modal";
import Confirm from "./Confirm";

export default function Order() {
  useEffect(() => {
    deliveryChange(
      <div className={s.deliveryCost}>
        <span> Доставка</span>
        <span> {deliveryCost}грн</span>
      </div>
    );
    deliveryAdressChange(
      <div>
        <div className={s.form}>Адреса</div>
        <input
          className={s.input}
          type="text"
          name="адресса"
          placeholder="Адреса"
          id="adress"
        />
      </div>
    );
  }, []);

  const items = useSelector((state) => state.items.data);
  const cart = items.filter((item) => item.quantity);

  const cartDataSumTotal = (arr) =>
    arr.reduce(
      (sum, { currentPrice, quantity }) => sum + currentPrice * quantity,
      0
    );

  const deliveryCost = 150;

  const [open, setOpen] = useState(false);
  const [isDelivery, deliveryChange] = useState();
  const [deliveryAdress, deliveryAdressChange] = useState();
  const [finalSum, finalSumChange] = useState(cartDataSumTotal(items));

  const listItems = cart.map((element) => (
    <Element key={element.article} content={element}></Element>
  ));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(event) {
    handleOpen();
    const info = {
      name: document.getElementById("name").value,
      tel: document.getElementById("tel").value,
      email: document.getElementById("email").value,
      adress: document.getElementById("adress").value,
      price: cartDataSumTotal(items),
    };

    alert("dear " + info.name + ", you will be notised soon");
  }

  function deliveryMethodChange(params) {
    if (+params.target.value) {
      finalSumChange(cartDataSumTotal(items) + deliveryCost + "грн");
      deliveryChange(
        <div className={s.deliveryCost}>
          <span> Доставка</span>
          <span> {deliveryCost}грн</span>
        </div>
      );
      deliveryAdressChange(
        <div>
          <div className={s.form}>Адреса</div>
          <input
            className={s.input}
            type="text"
            name="адресса"
            placeholder="Адреса"
            id=""
          />
        </div>
      );
    } else {
      deliveryAdressChange(<CustomSelect></CustomSelect>);
      deliveryChange();
      finalSumChange(cartDataSumTotal(items) + "грн");
    }
  }

  return (
    <div className={s.container}>
      <div className={s.order}>
        <form
          className={s.ordelement}
          onSubmit={() => {
            handleSubmit();
          }}
          id="order"
        >
          <h1 className={s.title}> Oформлення замовлення</h1>
          <div className={s.info}>Будь ласка, заповніть форму.</div>
          <div className={s.info}>
            {" "}
            Оберіть спосіб оплати та спосіб доставки
          </div>

          <h2 className={s.contactInfo}>Контактні дані</h2>
          <div className={s.form}>Ім'я одержувача*</div>
          <input
            type="text"
            className={s.input}
            name="Ім'я одержувача"
            placeholder="Ім'я одержувача"
            id="name"
            required
          />

          <div className={s.form}>Телефон*</div>
          <input
            type="tel"
            className={s.input}
            name="Телефон"
            placeholder="Телефон"
            id="tel"
            required
          />

          <div className={s.form}>Емейл</div>
          <input
            type="email"
            className={s.input}
            name="Емейл"
            placeholder="Емейл"
            id="email"
          />

          <h2 className={s.delivery}>Доставка та оплата</h2>
          <div className={s.radio}>
            <div onChange={deliveryMethodChange}>
              <div className={s.form}>спосіб доставки</div>
              <div className={s.element}>
                <input
                  className={s.button}
                  type="radio"
                  value="1"
                  name="deliveryMethod"
                  id="delivery"
                />
                <label className={s.text}>Кур’єром додому</label>
              </div>

              <div className={s.element}>
                <input
                  className={s.button}
                  type="radio"
                  value="0"
                  name="deliveryMethod"
                  id="adress"
                />
                <label className={s.text}>Самовивіз</label>
              </div>
            </div>

            <div>
              <div className={s.form}>спосіб розрахунку</div>
              <div className={s.element}>
                <input
                  className={s.button}
                  value="1"
                  type="radio"
                  name="paymentMethod"
                  id=""
                />
                <label className={s.text}>Банківською карткою онлайн</label>
              </div>
              <div className={s.element}>
                <input
                  className={s.button}
                  value="0"
                  type="radio"
                  name="paymentMethod"
                  id=""
                />
                <label className={s.text}>
                  Готівкою або карткою при отриманні
                </label>
              </div>
            </div>
          </div>
          {deliveryAdress}
        </form>
        <div className={s.orderConfirm}>
          <div>
            <h2 className={s.binmenu}>Товари у кошику</h2>
            <div className={s.binOrders}>{listItems}</div>
          </div>
          {isDelivery}

          <div className={s.cost}>
            <span> Сума замовлення</span>
            <span> {finalSum}</span>
          </div>

          <button className={s.button} onSubmit="#" type="submit" form="order">
            підтвердити замовлення
          </button>
        </div>
      </div>
      <span className={s.sub}>*поля обов'язкові до заповнення</span>
    </div>
  );
}
