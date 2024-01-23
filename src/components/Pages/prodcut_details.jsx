import ChangeImage from "../script_handle/index_scripts/product_detail";
import ProductIncrement from "../script_handle/index_scripts/product_increment";
import React, { useState, useEffect, useCallback } from "react";
import { useCartContext } from "../../store/useCartContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProduct] = useState(null);
  const { cartProduct, setCartProduct } = useCartContext();

  useEffect(() => {
    // Fetch the product details from the server
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const Add = useCallback(
    (product) => {
      const cart = { ...product, quantity: 1 };
      // const newData = cartProduct.map((item) => (item._id === id ? { ...item, quantity: value * 1 } : item));
      setCartProduct((prev) => [...prev, cart]);
    },
    [setCartProduct]
  );

  return (
    <>
      {products ? (
        <div className="container">
          <div className="wrapper">
            <div className="wishlist-nav">
              <div className="contact-title">
                <div className="contact-fix">
                  <a href="/home">Home</a>
                  &nbsp;/&nbsp;
                  <p>{products.product_name}</p>
                </div>
              </div>
              <div className="product-wrap">
                <ChangeImage />
                <div className="product-content">
                  <h2>{products.product_name}</h2>
                  <nav className="pro-nav-st">
                    <div className="product-ct-star">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <span>|</span>
                    <p>in stock: {products.stock_number}</p>
                  </nav>
                  <h1>${products.price}</h1>
                  <p>{products.deciption}</p>
                  <hr />
                  <div className="product-nb">
                    <nav>
                      <ProductIncrement maxIncrement={products.stock_number} />
                      <a href="#">
                        <button
                          className="pro-btn"
                          type="button"
                          onClick={() => {
                            Add(products);
                          }}
                        >
                          Buy Now
                        </button>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
export default ProductDetail;
