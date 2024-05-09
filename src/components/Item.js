import React, { useState } from 'react';

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{category}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <ul>
        <li className={inCart ? 'in-cart' : ''}>{name}</li>
      </ul>
    </div>
  );
};

export default Item;
