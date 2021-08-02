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
                    <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>


        </>
    );
};

export default HomeScreen;