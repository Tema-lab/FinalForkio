import { product } from "prelude-ls";
import { useState, useEffect, useCallback } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  APPLY_FILTER,
  CHECK_AND_ADD_TO_CART,
  SHOW_MODAL,
} from "../../store/types";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./ProductList.module.scss";

export function ProductList(props) {
  const { category, subcategory, type, subtype } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.data);
  const [productList, setProductList] = useState([]);
  const openModal = () => {
    dispatch({ type: SHOW_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const addToCart = (id) => {
    dispatch({ type: SHOW_MODAL });
    dispatch({ type: CHECK_AND_ADD_TO_CART, payload: { id: id, count: 1 } });
    console.log("id", id);
  };

  const isModal = useSelector((state) => state.modal.isOpen);
  const [itemsToShow, setItemsToShow] = useState(6);
  // useEffect(() => {
  //   // dispatch({
  //   //   type: APPLY_FILTER,
  //   //   payload: {
  //   //     field: category,
  //   //     type: type,
  //   //   },
  //   // });

  // });

  // const productList = useSelector((state) => state.items.data);

  // const [productList, setProductList] = useState(useSelector((state) => state.items.data));
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  useEffect(() => {
    if (type === "all") {
      setProductList(shuffle(items));
    } else {
      const allOfTypes = items.filter((item) => item[category] === type);
      setProductList(
        allOfTypes.filter((item) =>
          subcategory
            ? item[subcategory].type === subtype
            : item[category] === type
        )
      );
    }
  }, [category, subcategory, items, type, subtype]);
  // const allItems = useSelector((state) => shuffle(state.items.data));
  // useEffect(() => setProductList(allItems), []);
  // console.log(productList.filter((item) => item.categories === true));
  return (
    <div className={styles.wrapper}>
      {productList.slice(0, itemsToShow).map((product, index) => {
        return (
          <ItemCard
            // id={product.article}
            price={product.currentPrice}
            name={product.name}
            url={product.url}
            source={product.imageUrls[0]}
            text="failed to load image"
            isOnSale={product.isOnSale}
            isNew={product.isNew}
            discount={product.discount}
            isWithCart={true}
            key={index}
            btnHandle={() => addToCart(product.article)}
          />
        );
      })}
      <button onClick={() => setItemsToShow(itemsToShow + 6)}>load more</button>
      {isModal && <Modal closeModal={closeModal} closeButton={true} />}
    </div>
  );
}
