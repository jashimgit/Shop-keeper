/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../../redux/actions/productAction";
export default function ProductsList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // fetch products from API

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error :", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderList = products?.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="col-sm-12 col-md-3 pb-4" key={id}>
        <Link to={`/product-details/${id}`}>
          <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-text">$ {price}</h6>
              <h6 className="card-text">{category}</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row">
        {Object.keys(products).length === 0 ? (
          <div class="loader"></div>
        ) : (
          renderList
        )}
      </div>
    </div>
  );
}
