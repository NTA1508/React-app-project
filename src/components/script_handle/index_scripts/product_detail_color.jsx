import React from 'react';

const ChangeColor = () => {
  const changeColor = (element) => {
    // Remove 'active' class from all items
    const colorItems = document.querySelectorAll('.pro-color');
    colorItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add 'active' class to the clicked item
    element.classList.add('active');
  };

  return (
    <div className="product-form">
      <h4>Colours:</h4>
      <nav>
        <div
          className="pro-color active"
          style={{ background: 'palegoldenrod' }}
          onClick={(e) => changeColor(e.target)}
        />
        <div
          className="pro-color"
          style={{ background: 'black' }}
          onClick={(e) => changeColor(e.target)}
        />
      </nav>
    </div>
  );
};

export default ChangeColor;
