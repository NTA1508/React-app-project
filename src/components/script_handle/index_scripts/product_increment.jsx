import React from 'react';

const ProductIncrement = () => {
    const increment = () => {
        var numberText = document.getElementById('number-text');
        var currentValue = parseInt(numberText.value);

        if (currentValue < 999) {
            numberText.value = currentValue + 1;
        }
    };

    const decrement = () => {
        var numberText = document.getElementById('number-text');
        var currentValue = parseInt(numberText.value);

        if (currentValue > 1) {
            numberText.value = currentValue - 1;
        }
    };

    return (
        <>
            <div className="pro-mumber">
                <button id="number-prev" type="button" onClick={decrement}>
                    -
                </button>
                <input
                    id="number-text"
                    type="text"
                    placeholder={1}
                    defaultValue={1}
                    readOnly=""
                />
                <button id="number-next" type="button" onClick={increment}>
                    +
                </button>
            </div>
        </>
    );
};

export default ProductIncrement;
