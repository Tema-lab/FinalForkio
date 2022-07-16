import React from "react";
import {Switch, Route, Redirect, BrowserRouter as Router} from "react-router-dom";
import FormPage from "./component/FormPage/FormPage";
import Interested from "./component/interestedComponent/interested";
import Order from "./component/Order/Order";
import Cart from "./component/Cart/Cart";
import {FOR_CLIENTS, INFO} from "./component/Footer/footer_data";
import ItemInfo from "./component/ItemInfo/ItemInfo";
import Header from "./component/Header/Header";
import data from "./component/Header/data";
import Footer from "./component/Footer/Footer";

export const useRoutes = (isAuthenticated)=>{
    if(isAuthenticated){
        return(
            <Router>
                <Header data={data} />
                <div className="App">
                    <Switch>
                        <Route path="/" exact >
                            <Interested />
                        </Route>
                        <Route exact path="/products">
                            <h1>products</h1>
                        </Route>
                        <Route path="/bin">
                            <h1>bin</h1>
                        </Route>
                        <Route path="/user/:id">
                            <h1>user</h1>
                        </Route>
                        <Route path="/order">
                            <Order/>
                        </Route>
                        <Route path="/cart" component={Cart} />
                        {INFO.links.map((link) => (
                            <Route path={`/${link.url}`} component={link.component} />
                        ))}
                        {FOR_CLIENTS.links.map((link) => (
                            <Route path={`/${link.url}`} component={link.component} />
                        ))}
                        {/*<Route path="/:id">*/}
                        {/*    <ItemInfo />*/}
                        {/*</Route>*/}
                        <Redirect to="/"/>
                    </Switch>
                </div>
                <Footer />
            </Router>
        )

    }

    // return (
    //     <Switch>
    //         <Route path="/" exact>
    //             <FormPage/>
    //         </Route>
    //         <Redirect to="/"/>
    //     </Switch>
    // )
}