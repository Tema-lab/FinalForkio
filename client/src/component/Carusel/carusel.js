import React from 'react'
import Carousel from 'react-elastic-carousel'
import s from './carusel.module.scss'
import Add from "./Add"
import img1 from './media/Banner-1.png'


export default function Carusel() {

    const add1 = {
        img: img1,
        text1: "Відчуй себе аристократом!",
        text2: "Знижка 25% на все"
    }
    const add2 = {
        img: img1,
        text1: "Спи як король!",
        text2: "Акційне ліжко"
    }
    const add3 = {
        img: img1,
        text1: "Працюй з комфортом!",
        text2: "Знижка 10%"
    }
    const add4 = {
        img: img1,
        text1: "Відчуй себе аристократом!",
        text2: "Знижка 25% на все"
    }
    const add5 = {
        img: img1,
        text1: "Надійне ліжко – \n міцний сон!",
        text2: "Супер акція на усі \n ліжка з дерева"
    }

    return (
        <div className={s.cont}>
            <Carousel showArrows={false} disableArrowsOnEnd={false} enableAutoPlay={true} autoPlaySpeed={5000}
                      itemsToShow={1}>
                <Add content={add1}> </Add>
                <Add content={add2}> </Add>
                <Add content={add3}> </Add>
                <Add content={add4}> </Add>
                <Add content={add5}> </Add>
            </Carousel>
        </div>
    )
}
