import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Interested from "./component/interestedComponent/interested";
import { useDispatch, useSelector } from "react-redux";
import { ProductList, testItem } from "./component/ProductList/ProductList";
import Cart from "./component/Cart/Cart";
import ItemInfo from "./component/ItemInfo/ItemInfo";
import { loadItems } from "./store/actions";

import { INFO, FOR_CLIENTS } from "./component/Footer/footer_data";
import Order from "./component/Order/Order.jsx";
import data from "./component/Header/data";
import { useAuth } from "./hooks/auth.hook";
// import { AuthContext } from "./context/AuthContext";
import { useRoutes } from "./routes";
import CategoriesMain from "./component/CategoriesMain/CategoriesMain";
// import Carusel from "./component/Carusel/carusel"

function App() {
  const dispatch = useDispatch();
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  useEffect(() => {
    dispatch(loadItems());
  }, []);
  
  return (
    <Router>
      <Header data={data} />{" "}
      <div className="App">
        <Switch>
          <Route path="/" exact>
          <Interested />
            {/* <Carusel></Carusel> */}
            <CategoriesMain />

          </Route>{" "}
          <Route exact path="/products">
            <ProductList type={"all"} />{" "}
          </Route>{" "}
          <Route exact path="/kitchen_chairs">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стул"
              subtype="кухонный"
            />{" "}
          </Route>{" "}
          <Route exact path="/office_chairs">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стул"
              subtype="офисный"
            />{" "}
          </Route>{" "}
          <Route exact path="/simple_chairs">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стул"
              subtype="табуретки"
            />{" "}
          </Route>{" "}
          <Route exact path="/computer_chairs">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стул"
              subtype="компьютерный"
            />{" "}
          </Route>{" "}
          <Route exact path="/chairs">
            <ProductList category="categories" type="стул" />{" "}
          </Route>{" "}
          <Route exact path="/coffee_tables">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стол"
              subtype="журнальный"
            />{" "}
          </Route>{" "}
          <Route exact path="/kitchen_tables">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стол"
              subtype="кухонный"
            />{" "}
          </Route>{" "}
          <Route exact path="/office_tables">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стол"
              subtype="офисный"
            />{" "}
          </Route>{" "}
          <Route exact path="/computer_tables">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="стол"
              subtype="компьютерный"
            />{" "}
          </Route>{" "}
          <Route exact path="/tables">
            <ProductList category="categories" type="стол" />{" "}
          </Route>{" "}
          <Route exact path="/beds">
            <ProductList category="categories" type="кровать" />{" "}
          </Route>{" "}
          <Route exact path="/dubledeck_beds">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="кровать"
              subtype="двухъярусные"
            />{" "}
          </Route>{" "}
          <Route exact path="/double_beds">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="кровать"
              subtype="двуспальные"
            />{" "}
          </Route>{" "}
          <Route exact path="/single_beds">
            <ProductList
              category="categories"
              subcategory="characteristics"
              type="кровать"
              subtype="односпальные"
            />{" "}
          </Route>{" "}
          <Route path="/bin">
            <h1> bin </h1>{" "}
          </Route>{" "}
          <Route path="/user/:id">
            <h1> user </h1>{" "}
          </Route>{" "}
          <Route path="/order">
            <Order />
          </Route>{" "}
          <Route path="/cart" component={Cart} />{" "}
          {INFO.links.map((link) => (
            <Route path={`/${link.url}`} component={link.component} />
          ))}{" "}
          {FOR_CLIENTS.links.map((link) => (
            <Route path={`/${link.url}`} component={link.component} />
          ))}{" "}
          <Route path="/:id">
            <ItemInfo />
          </Route>{" "}
          <Redirect to="/" />
        </Switch>{" "}
      </div>{" "}
      <Footer />
    </Router>
  );
}

export default App;
