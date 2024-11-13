/*import React from 'react';

const BuyNow = ({ book, onBuyNow }) => {
  const handleClick = () => {
    onBuyNow(book);

  };

  return (
    <button onClick={handleClick} className="buy-now-button">
      Buy Now
    </button>
  );
};

export default BuyNow;
*/
/*
import React from 'react';

const BuyNow = ({ book, onBuyNow }) => {
  const handleClick = () => {
    onBuyNow(book);
  
  };

  return (
    <button onClick={handleClick} className="buy-now-button">
      Buy Now
    </button>
  );
};

export default BuyNow;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyNow.css';

const BuyNow = ({ book }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    alert(`Purchasing ${book.title} for ${book.price}`);
    navigate('/purchase'); // Navigate to the Purchase page
  };

  return (
    <button className="buy-now" onClick={handleBuyNow}>
      Buy Now
    </button>
  );
};

export default BuyNow;
