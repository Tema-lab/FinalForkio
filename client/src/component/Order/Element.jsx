import React from "react";
import s from "./Order.module.scss";

export default function Element(element) {
  console.log(element.content);
  const {
    name,
    imageUrls,
    article,
    currentPrice,
    quantity,
    categories,
  } = element.content;
  return (
    <tr className={s.element}>
      <th>
        <img src={imageUrls[0]} width="100" height="100" alt="Img alt" />
      </th>
      <th className={s.name}>
        <div className={s.n1}>
          {" "}
          {categories} {name}
        </div>
        <div className={s.n2}>Артикул - {article}</div>
      </th>
      <th className={s.price}>
        <div className={s.p1}>Ціна - {currentPrice}</div>
        <div className={s.p2}>Кількість - {quantity}</div>
      </th>
    </tr>
  );
}
