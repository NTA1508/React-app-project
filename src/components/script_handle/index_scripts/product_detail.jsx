import React from 'react';

const ChangeImage = () => {
  const changeImage = (element) => {
    const smallImages = document.querySelectorAll('.item-img-small');
    smallImages.forEach((img) => {
      img.classList.remove('active');
    });
    element.classList.add('active');
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
          <img src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/158533/Originals/galaxy-z-flip-5-gia-bao-nhieu-a.jpg" alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small3"
          onClick={() => changeImage(document.getElementById('img-small3'))}
        >
          <img src="https://kenh14cdn.com/203336854389633024/2022/3/12/thumbnail-elle-iphone-v2-1646951838-1647070083505165556927.jpeg" alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small4"
          onClick={() => changeImage(document.getElementById('img-small4'))}
        >
          <img src="https://cdn.tgdd.vn/Products/Images/1942/306593/8050psb.jpg" alt="img" />
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
