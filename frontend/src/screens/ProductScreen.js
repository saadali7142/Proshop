<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
=======
import React, { useEffect, useState } from "react";
>>>>>>> master
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
<<<<<<< HEAD
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';
import { PRODUCT_DETAILS_RESET } from '../constants/productConstants';

const ProductScreen = ({ history, match }) => {
  console.log({ history });
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  console.log({ match });

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch({ type: PRODUCT_DETAILS_RESET });
  }, []);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  // const product = products.find((p) => p._id === match.params.id);

  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${match.params.id}`);
  //     // console.log(response.data);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, []);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
=======
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
const ProductScreen = () => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;
  let params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, []);
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
>>>>>>> master
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
<<<<<<< HEAD
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
=======
        <Message variant="danger" />
      ) : (
        <Row>
          <Col md={6}>
            <Image fluid src={product.image} alt={product.name} />
>>>>>>> master
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
<<<<<<< HEAD
=======

>>>>>>> master
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
<<<<<<< HEAD
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
=======
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

>>>>>>> master
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
<<<<<<< HEAD
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="d-grid m-0"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
=======

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
>>>>>>> master
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
