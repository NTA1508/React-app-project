import React, { useEffect, useRef } from 'react';

const PaginationComponent = () => {
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const knots = document.querySelectorAll('.knot:not(.knot-prev):not(.knot-next):not(.knot-first):not(.knot-last)');
    const prevButton = document.querySelector('.knot-prev');
    const nextButton = document.querySelector('.knot-next');
    const firstButton = document.querySelector('.knot-first');
    const lastButton = document.querySelector('.knot-last');

    // Set "knot-active" class for the initially selected knot
    knots[activeIndexRef.current].classList.add('knot-active');

    knots.forEach((knot, index) => {
      knot.addEventListener('click', () => {
        // Remove "knot-active" class from all knots
        knots.forEach((k) => {
          k.classList.remove('knot-active');
        });

        // Add "knot-active" class to the clicked knot
        knot.classList.add('knot-active');

        // Update activeIndex
        activeIndexRef.current = index;
      });
    });

    prevButton.addEventListener('click', () => {
      navigate(-1);
    });

    nextButton.addEventListener('click', () => {
      navigate(1);
    });

    firstButton.addEventListener('click', () => {
      navigateTo(0);
    });

    lastButton.addEventListener('click', () => {
      navigateTo(knots.length - 1);
    });

    function navigate(step) {
      // Remove "knot-active" class from the current knot
      knots[activeIndexRef.current].classList.remove('knot-active');

      // Move to the next/previous knot
      const newIndex = Math.max(0, Math.min(knots.length - 1, activeIndexRef.current + step));

      // Add "knot-active" class to the new knot
      knots[newIndex].classList.add('knot-active');

      // Update activeIndex
      activeIndexRef.current = newIndex;
    }

    function navigateTo(index) {
      // Remove "knot-active" class from the current knot
      knots[activeIndexRef.current].classList.remove('knot-active');

      // Move to the specified knot
      const newIndex = Math.max(0, Math.min(knots.length - 1, index));

      // Add "knot-active" class to the new knot
      knots[newIndex].classList.add('knot-active');

      // Update activeIndex
      activeIndexRef.current = newIndex;
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="pagination">
      <div className="knot knot-first">First</div>
      <div className="knot knot-prev">
        <i className="bi bi-chevron-double-left" />
      </div>
      <div className="knot knot-active">1</div>
      <div className="knot">2</div>
      <div className="knot">3</div>
      <div className="knot">4</div>
      <div className="knot">5</div>
      <div className="knot knot-next">
        <i className="bi bi-chevron-double-right" />
      </div>
      <div className="knot knot-last">Last</div>
    </div>
  );
};

export default PaginationComponent;
