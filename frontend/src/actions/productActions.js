<<<<<<< HEAD
import axios from 'axios'
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')
=======
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");
>>>>>>> master

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
<<<<<<< HEAD
    })
=======
    });
>>>>>>> master
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
<<<<<<< HEAD
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/products/${id}`)
=======
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);
>>>>>>> master

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
<<<<<<< HEAD
    })
=======
    });
>>>>>>> master
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
<<<<<<< HEAD
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
=======
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
>>>>>>> master
