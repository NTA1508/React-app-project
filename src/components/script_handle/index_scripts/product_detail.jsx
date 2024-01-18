import React from 'react';

const ChangeImage = () => {
  const changeImage = (element) => {
    // Remove 'active' class from all items
    const smallImages = document.querySelectorAll('.item-img-small');
    smallImages.forEach((img) => {
      img.classList.remove('active');
    });

    // Add 'active' class to the clicked item
    element.classList.add('active');

    // Get the source of the clicked image and set it as the source for the big image
    const imgSrc = element.querySelector('img').src;
    document.getElementById('img-big').src = imgSrc;
  };

  return (
    <div className="product-imgs">
      <div className="list-img-small">
        <div
          className="item-img-small active"
          id="img-small1"
          onClick={() => changeImage(document.getElementById('img-small1'))}
        >
          <img src="https://cdn.tgdd.vn/Files/2020/08/13/1279576/wccfdualsensecontroller_800x450.jpg" alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small2"
          onClick={() => changeImage(document.getElementById('img-small2'))}
        >
          <img src="https://gamingshop.vn/wp-content/uploads/2023/03/bandicam-2023-03-27-02-00-33-378_Fotor.jpg" alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small3"
          onClick={() => changeImage(document.getElementById('img-small3'))}
        >
          <img src="https://gamingshop.vn/wp-content/uploads/2023/03/bandicam-2023-03-27-02-00-33-378_Fotor.jpg" alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small4"
          onClick={() => changeImage(document.getElementById('img-small4'))}
        >
          <img src="https://cdn.tgdd.vn/Files/2020/08/13/1279576/wccfdualsensecontroller_800x450.jpg" alt="img" />
        </div>
      </div>
      <div className="img-big">
        <img
          id="img-big"
          src="https://cdn.tgdd.vn/Files/2020/08/13/1279576/wccfdualsensecontroller_800x450.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default ChangeImage;
