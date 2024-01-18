import React, { useState } from 'react';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productData = [
    { id: 1, name: "Product 1", category: "mobile" },
    { id: 2, name: "Product 2", category: "laptop" },
    { id: 3, name: "Product 3", category: "mobile" },
    { id: 4, name: "Product 4", category: "tablet" },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? productData.filter(product => product.category === selectedCategory)
    : productData;

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="mobile"
            checked={selectedCategory === "mobile"}
            onChange={() => handleCategoryChange("mobile")}
          />
          Mobile
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="laptop"
            checked={selectedCategory === "laptop"}
            onChange={() => handleCategoryChange("laptop")}
          />
          Laptop
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="tablet"
            checked={selectedCategory === "tablet"}
            onChange={() => handleCategoryChange("tablet")}
          />
          Tablet
        </label>
      </div>
      <div>
        <h2>Product List</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              {product.name} - {product.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
