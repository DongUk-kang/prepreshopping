import React, { useState, useEffect } from 'react';
import {Row, Col, Card} from 'react-bootstrap'
import ProductCard from "../components/ProductCard";
import axios from "axios";

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        axios.get("/api/products")
            .then(res => {
                setProducts(res.data.products)
                console.log(res.data.products)
            })
            .catch(err => console.log(err))
    }

    useEffect(() =>{
        getData()
    }, [])


    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(item => (
                    <ProductCard product={item} />
                ))}
            </Row>


        </>
    );
};

export default HomeScreen;