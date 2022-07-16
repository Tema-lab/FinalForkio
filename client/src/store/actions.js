import axios from "axios";
import * as actions from "./types";

export const getCart = () => {
    const cart = localStorage.getItem("Cart");
    return cart ? JSON.parse(cart) : {};
};
export const setCart = (data) => {
    localStorage.setItem("Cart", JSON.stringify(data));
};
export const deleteCart = () => {
    localStorage.removeItem("Cart");
};

//считаем общее количество товаров в корзине
export const amountSum = (data) => {
    const cartData = JSON.parse(localStorage.getItem("Cart"));
    console.log("data", cartData);
    if (cartData) {
        const cartDataAmount = data ?
            data.map(function(e) {
                return e.quantity;
            }) :
            Object.values(cartData).map(({ count }) => count);

        return cartDataAmount.reduce((total, amount) => {
            // console.log("totamo", total, amount);
            let test = total + amount;
            // console.log("sum", test);
            return test;
        }, 0);
    } else return 0;
};

export const loadItems = () => (dispatch) => {
    const cart = getCart();

    axios("./descriptionProduct.json").then((res) => {
        const newItems = res.data.map((item) => {
            const currentItemLS = cart[item.article] || 0;
            item.quantity = currentItemLS.count || 0;
            return item;
        });
        dispatch({ type: actions.SUCCESS, payload: newItems });
    });
};