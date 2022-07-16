import React from 'react'
import s from './carusel.module.scss'
export default function Add(props) {

    return (
        <div className = {s.image}>
            <img src = {props.content.img} alt={'img'} />
            <span className = {s.imageText1}>{props.content.text1}</span>
            <span className = {s.imageText2}>{props.content.text2}</span>
        </div>
    )
}