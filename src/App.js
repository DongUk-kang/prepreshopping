import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import CartScreen from "./Screens/CartScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import ShippingScreen from "./Screens/ShippingScreen";

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
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
