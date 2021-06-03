/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../../redux/actions/productAction";

export default function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  const product = useSelector((state) => state.product);
  const { id, title, image, price, description, category } = product;
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error :", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {Object.keys(product).length === 0 ? (
           
           <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          ) : (
            <>
              <div className="col-md-4">
                <img src={image} alt={title}  className="img-fluid"/>
              </div>
              <div className="col-md-7">
               <div className="card">
                 <div className="card-body">
                 <h4 className="card-title">{title}</h4>
                  <p className="badge badge-primary">{category}</p> <br />
                  <p className="badge badge-primary">Price: $ {price}</p>
                  <h4>Product Description </h4>
                  <p className="card-text"> {description} </p>
                 </div>
               </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
