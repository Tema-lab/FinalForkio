import React, {useEffect, useState} from 'react';
import './Card.scss'
import {useDispatch} from 'react-redux'
import {INCREASE_COUNT, DECREASE_COUNT, DELETE_FROM_CART} from '../../../store/types'
import {getCart, setCart} from "../../../store/actions";

const Card = ({ item }) => {
    const { name, imageUrls, article, currentPrice, quantity, color } = item
    const { type = {}, material = [] } = item.characteristics
    
    const cart = getCart()
    
    const [colorValue, setColorValue] = useState(cart[item.article].color);
    const [obbivkaValue, setObbivkaValue] = useState(cart[item.article].obbivka);
    
    const colorChange = (e) => {
        setColorValue(e.target.value);
    
        cart[item.article].color = e.target.value
        setCart(cart)
    }
    
    const obbivkaChange = (e) => {
        setObbivkaValue(e.target.value);
    
        cart[item.article].obbivka = e.target.value
        setCart(cart)
    }
    //
    // console.log(colorValue)
    // console.log(obbivkaValue)

    const dispatch = useDispatch()
    
    const increaseCount = (data) => {
        dispatch({ type: INCREASE_COUNT, payload: data })
    }
    
    const decreaseCount = (data) => {
        dispatch({ type: DECREASE_COUNT, payload: data })
    }
    
    const deleteFromCart = (data) => {
        dispatch({ type: DELETE_FROM_CART, payload: data })
    }
    
    return (
        <tr>
            <td className="card__times-container">
                <div
                    onClick={() => {
                        deleteFromCart(item.article)
                    }}
                    className="times">&times;
                </div>
            </td>
            <td className="card__img-container"><img src={imageUrls[0]} width="35" height="70" alt='Img alt'/></td>
            <td className="card__name-container"><h3 className="card__name">{name}</h3><p
                className="card__code-number">Код: {article}</p></td>
            <td className="card__select-width">
                <select className="info__select" value={colorValue} onChange={colorChange} className="card__select color">
                    {color.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </td>
            <td className="card__select-width">
                <select className="info__select" value={obbivkaValue} onChange={obbivkaChange} className="card__select obbivka">
                    {material.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </td>
            <td className="card__count-container">
                <button className="card__count-btn" onClick={() => decreaseCount(item.article)}><span
                    className="card__count">-</span></button>
                <span className="card__count-name">{quantity}</span><span className="card__count--grey">шт</span>
                <button className="card__count-btn" onClick={() => increaseCount(item.article)}><span
                    className="card__count">+</span></button>
            </td>
            <td className="card__price-container"><span className="card__price">{quantity * currentPrice} <span
                className="card__currency">грн</span></span><p
                className="card__sum-price">{quantity}x{currentPrice} <span className="card__currency">грн</span></p>
            </td>
        </tr>
    )
};

export default Card
