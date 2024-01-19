import React from 'react';

const AllProducts = () => {
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
                <tr>
                  <td className="cart-text">1</td>
                  <td className="cart-img">
                    <img src="https://logico.com.vn/images/products/2023/02/10/original/tay-cam-playstation-5-dualsense-edge-1_1676014066.png" alt="img" />
                  </td>
                  <td className="cart-text">Playstation 5 DualSense Edge</td>
                  <td className="cart-text">Game consoles</td>
                  <td className="cart-text">50</td>
                  <td className="cart-text">$240</td>
                  <td className="cart-text">20%</td>
                  <td className="cart-text">Month sale</td>
                  <td className="cart-text">Ha Noi</td>
                  <td>
                    <a href="#">
                      <i className="bi bi-trash3" />
                    </a>
                    <a href="/edit_product" style={{marginLeft:"10px"}}>
                      <i className="bi bi-pencil-square" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="cart-text">2</td>
                  <td className="cart-img">
                    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/w_1920,c_limit/iphonex-TA.jpg" alt="img" />
                  </td>
                  <td className="cart-text">IPhone X</td>
                  <td className="cart-text">Mobile phones</td>
                  <td className="cart-text">100</td>
                  <td className="cart-text">$200</td>
                  <td className="cart-text">10%</td>
                  <td className="cart-text">Day sale</td>
                  <td className="cart-text">Da Nang</td>
                  <td>
                    <a href="#">
                      <i className="bi bi-trash3" />
                    </a>
                    <a href="/edit_product" style={{marginLeft:"10px"}}>
                      <i className="bi bi-pencil-square" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;