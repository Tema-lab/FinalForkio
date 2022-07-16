import * as actions from "./types";
import { getCart, setCart, setUser } from "./actions";
import { LOGIN, LOGIN_SUCCESS } from "./types";
import axios from "axios";

const initialState = {
    items: {
        data: [],
        isLoading: true,
    },
    modal: {
        info: "",
        data: null,
        isOpen: false,
    },

    isAuthenticated: false,
    isLoading: false,
    user: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actions.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };

        case actions.SUCCESS:
            return {
                ...state,
                items: {...state.data, data: action.payload, isLoading: false },
            };
        case actions.SHOW_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: true,
                },
            };
        case actions.CLOSE_MODAL:
            return {...state, modal: {...state.modal, isOpen: false } };
        case actions.CHECK_AND_ADD_TO_CART:
            const { id, count, color, obbivka } = action.payload || {};
            const newItems = state.items.data.map((item) => {
                if (item.article === id) {
                    item.quantity = item.quantity + count;

                    const cart = getCart();
                    const itemCount = !!cart[item.article] ?
                        cart[item.article].count + count :
                        count;
                    cart[item.article] = { count: itemCount, color, obbivka };
                    setCart(cart);
                }
                return item;
            });
            return {...state, items: {...state.items, data: newItems } };
        case actions.INCREASE_COUNT:
            const addItems = state.items.data.map((item) => {
                if (item.article === action.payload) {
                    item.quantity++;
                    const cart = getCart();
                    cart[item.article].count++;
                    setCart(cart);
                }
                return item;
            });
            return {
                ...state,
                items: {...state.items, data: addItems },
            };
        case actions.DECREASE_COUNT:
            const reduceItems = state.items.data.map((item) => {
                if (item.article === action.payload) {
                    item.quantity--;

                    const cart = getCart();
                    cart[item.article].count--;
                    if (cart[item.article].count === 0) {
                        delete cart[item.article];
                    }
                    setCart(cart);
                }
                return item;
            });
            return {
                ...state,
                items: {...state.items, data: reduceItems },
            };
        case actions.DELETE_FROM_CART:
            const deleteItems = state.items.data.map((item) => {
                if (item.article === action.payload) {
                    item.quantity = null;
                    const cart = getCart();
                    delete cart[item.article];
                    setCart(cart);
                }
                return item;
            });
            return {
                ...state,
                items: {...state.items, data: deleteItems },
            };
        default:
            return state;
    }
};

export default reducer;