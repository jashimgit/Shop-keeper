/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { selectedProduct } from "../../redux/actions/productAction";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { id, title, image } = product;
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
  }, [productId]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {Object.keys(product).length === 0 ? (
            <div> .....Loading</div>
          ) : (
            <div>
              <div className="col-md-4">
                <img src={image} alt={title} />
              </div>
              <div className="col-md-7">
                <p>product details section</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
