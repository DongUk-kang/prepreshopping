import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrder from "./screens/PlaceOrder";

const App = () => {
    return (
        <Router>
            <Header />
            <main className={'py-3'}>
                <Container>
                    <Route path={"/"} exact component={HomeScreen} />
                    <Route path={"/product/:id"} exact component={ProductScreen} />
                    <Route path={"/register"} exact componet={RegisterScreen} />
                    <Route path={"/login"} exact component={LoginScreen} />
                    <Route path={"/cart"} exact component={CartScreen} />
                    <Route path={"/shipping"} exact component={ShippingScreen} />
                    <Route path={"/payment"} exact component={PaymentScreen} />
                    <Route path={"/placeorder"} exact conponent={PlaceOrder} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
