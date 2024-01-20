import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getProducts')
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <a href="/admin">Home</a>
              &nbsp;/&nbsp;
              <p>All products</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product picture</th>
                  <th>Product name</th>
                  <th>Product type</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Sale</th>
                  <th>Promotion type</th>
                  <th>Storage address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product._id}>
                    <td className="cart-text">{product._id}</td>
                    <td className="cart-img">
                      <img src={product.product_image} alt="product-img" />
                    </td>
                    <td className="cart-text">{product.product_name}</td>
                    <td className="cart-text">{product.type}</td>
                    <td className="cart-text">{product.stock_number}</td>
                    <td className="cart-text">${product.price}</td>
                    <td className="cart-text">{product.sales}%</td>
                    <td className="cart-text">{product.sale_type}</td>
                    <td className="cart-text">{product.storage_address}</td>
                    <td>
                      <a href="#">
                        <i className="bi bi-trash3" />
                      </a>
                      <a href="/edit_product" style={{ marginLeft: "10px" }}>
                        <i className="bi bi-pencil-square" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
