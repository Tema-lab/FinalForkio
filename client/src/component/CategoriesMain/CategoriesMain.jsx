import React from "react";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import Bed from './Bed.svg'
import Chair from './Chair.svg'
import Furniture from './Furniture.svg'
import Table from './Table.svg'
import s from './CategoriesMain.module.scss'

const CategoriesMain = () => {
    return (
        <div className={s.categories__container}>
            <h3 className={s.categories__title}>Популярні категорії</h3>

            <div className={s.categories__wrapper}>
                <CategoriesItem url={'/'} img={Table} title={'Столи'}
                                text={'Вирізняються міцною та надійною конструкцією. Матеріал – дуб.'}/>
                <CategoriesItem url={'/'} img={Bed} title={'Ліжка'}
                                text={'Матеріал – масив дуба. Комплектуються ортопедичною основою під матрац.'}/>
                <CategoriesItem url={'/'} img={Furniture} title={'Корпусні меблі'}
                                text={'Дубові етажерки, комоди, серванти на будь-який смак.'}/>
                <CategoriesItem url={'/'} img={Chair} title={'Стільці'}
                                text={'Виготовлені з високоякісного масиву дуба. Комплектуються твердим або м’яким сидінням.'}/>
            </div>
        </div>
    )
}

export default CategoriesMain;
