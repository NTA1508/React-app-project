import { useCallback, useRef, useState } from "react";
import { useCartContext } from "../../store/useCartContext";

export default function Cart() {
  const { cartProduct, setCartProduct } = useCartContext();

  const handleOnChangeQuantity = useCallback(
    (id, value) => {
      // console.log(newData);
      // setCartProduct((prev) => {
      //   const newData = cartProduct.filter((item) => {
      //     item.quantity = value;
      //     return item.id === id;
      //   });
      //   return [...newData];
      // });
    },
    [cartProduct, setCartProduct]
  );

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <a href="/home">Home</a>
              &nbsp;/&nbsp;
              <p>Cart</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Product picture</th>
                  <th>Name product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartProduct
                  ? cartProduct.map((item) => (
                      <tr>
                        <td className="cart-img">
                          <img src={item.product_image} alt="img" />
                        </td>
                        <td className="cart-text webkit-text">{item.product_name}</td>
                        <td className="cart-text">${item.price}</td>
                        <td className="cart-adjust">
                          <input type="number" min={1} value={item.quantity} onChange={(e) => handleOnChangeQuantity(item.id, e.target.value)} />
                        </td>
                        <td className="cart-text">${item.price * item.quantity}</td>
                        <td>
                          <a href="#">
                            <button>
                              <i className="bi bi-trash3" />
                            </button>
                          </a>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
            <div className="cart-synthetic">
              <h4>
                Total number of products: <span>2</span> product
              </h4>
              <button className="remove-all" type="button">
                Remove all
              </button>
            </div>
            <div className="cart-pay">
              <div className="cart-pay__body">
                <div className="cart-poin">
                  <p>Total cost of goods:</p> <span>$240</span>
                </div>
                <div className="cart-poin">
                  <p>Transport fee:</p> <span>$4</span>
                </div>
                <div className="cart-poin">
                  <p>Discount code (if any):</p> <span>$0</span>
                </div>
                <div className="cart-poin">
                  <p>Total payment:</p> <span>$244</span>
                </div>
              </div>
              <div className="cart-footer">
                <p>
                  Pressing 'Place Order' implies that you agree to comply with <a>Exclusive's Terms and Conditions.</a>
                </p>
                <a href="/checkout">
                  <button className="order-cart" type="button">
                    Proceed to payment
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
