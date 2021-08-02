import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

const App = () => {
    return (
        <Router>
            <Header />
            <main className={'py-3'}>
                <Container>
                    <Route path={"/"} exact component={HomeScreen} />
                    <Route path={"/product/:id"} exact component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
