import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  console.log("🚀 ~ file: Product.js ~ line 7 ~ Product ~ product", product);
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            {/* <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div>
            Replacing it With the Rating Component
            */}
            {console.log("sssssssssssssssssssss", product.numReviews)}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="#f8e25"
            />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
