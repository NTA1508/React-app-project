import PaginationComponent from "../../script_handle/index_scripts/whishlist_pagechange";
import { useCartContext } from "../../../store/useCartContext";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, redirect } from "react-router-dom";

export default function ProductCate() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const { cartProduct, setCartProduct } = useCartContext();

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const Add = useCallback(
    (product) => {
      const cart = { ...product, quantity: 1 };
      setCartProduct((prev) => [...prev, cart]);
    },
    [setCartProduct]
  );

  return (
    <div className="container">
      <div className="wrapper" style={{ display: "flex" }}>
        <div className="category-product">
          <div className="category-item-product">
            <div className="menu-title">
              <NavLink to={"/products"}>
                <p style={{ color: "#DB4444" }}>All Products</p>
              </NavLink>
            </div>
          </div>
          <div className="category">
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/mobiles"}>
                  <p>Mobile phones</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/laptops"}>
                  <p>Laptops and Tablets</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/tv"}>
                  <p>Televisions and Monitors</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/audios"}>
                  <p>Audio and Headphones</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/cameras"}>
                  <p>Cameras</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/consoles"}>
                  <p>Game consoles</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/printers"}>
                  <p>Printers and Scanners</p>
                </NavLink>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <NavLink to={"/smart"}>
                  <p>Smart home appliances</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="wishlist-nav-1" style={{ marginLeft: "10px" }}>
          <div className="contact-title">
            <div className="contact-fix">
              <a href="/home">Home</a>
              &nbsp;/&nbsp;
              <p>All Products</p>
            </div>
          </div>
          <div className="wishlist-wrap">
            <div className="wishlist-list">
              {currentProducts.map((products) => (
                <div className="product-item" key={products._id}>
                  <div className="product-item__img">
                    <Link to={`/detail/${products._id}`}>
                      <img src={products.product_image} alt="product-img" />
                    </Link>
                    <button
                      style={{ zIndex: "9999" }}
                      className="add-cart"
                      type="button"
                      onClick={() => {
                        Add(products);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <h4 className="product-name webkit-text">{products.product_name}</h4>
                  <div className="product-price">
                    {products.sale_type === "no" ? (
                      <>
                        <span id="price-new">${products.price}</span>
                      </>
                    ) : (
                      <>
                        <span id="price-new">${products.price - (products.price * products.sales) / 100}</span>
                        <span id="price-old">${products.price}</span>
                      </>
                    )}
                  </div>
                  <div className="product-action">
                    <i className="bx bx-map-pin" />
                    <span>{products.storage_address}</span>
                  </div>
                  {products.sale_type === "no" ? (
                    <>
                      <span></span>
                    </>
                  ) : (
                    <>
                      <div className="discount">-{products.sales}%</div>
                    </>
                  )}
                  <div className="product-tools">
                    <button className="product-tl__button" type="button">
                      <i className="bx bx-heart" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* pagination - phân trang */}
            {/* <PaginationComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
