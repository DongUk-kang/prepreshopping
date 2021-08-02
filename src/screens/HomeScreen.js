import React, { useState, useEffect } from 'react';
import {Row, Col, Card} from 'react-bootstrap'
import ProductCard from "../components/ProductCard";
import { listProducts } from "../actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {

    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
    console.log(products)


    useEffect(() =>{
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant={"danger"}>
                    {error}
                </Message>
            ) : (
                <>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}

        </>
    );
};

export default HomeScreen;