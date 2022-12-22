import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { savePaymentMethod} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  
  const { shippingAddress } = cart;
  

  let location = useLocation();
  let navigate = useNavigate();
if(!shippingAddress){
    navigate("/shipping")
}
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <div className="shipping-form-width" >

    
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
        <Col>
        <Form.Check type="radio" label="Paypal or Credit Card" id='PayPal'
        name='paymentMethod' value='PayPal' checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
        </Col>
        </Form.Group>

        <Button classname="mt-4"type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
    </div>
  );
};

export default PaymentScreen;
