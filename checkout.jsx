// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './checkout.css';

// const Checkout = () => {
//   const location = useLocation();
//   const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

//   return (
//     <div className="checkout-container">
//       <h1>Checkout Summary</h1>
//       {cartItems.length === 0 ? (
//         <p>No items in your cart.</p>
//       ) : (
//         <div>
//           <h2>Your Cart Items</h2>
//           <div className="checkout-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="checkout-item">
//                 <p>Book Name: {item.name}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: ${item.price}</p>
//                 <p>Total: ${item.price * item.quantity}</p>
//               </div>
//             ))}
//           </div>
//           <h3>Total Price: ${totalPrice}</h3>
//           <h2>Payment Options</h2>
//           <p>Choose your UPI payment option:</p>
//           <div className="upi-options">
//             <button className="upi-button">UPI 1</button>
//             <button className="upi-button">UPI 2</button>
//             <button className="upi-button">UPI 3</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Checkout;
import React from 'react';
import { useLocation } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  return (
    <div className='hello'>
    <div className="checkout-container">
      <h1>Checkout Summary</h1>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <div>
          <h2>Your Cart Items</h2>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.imageUrl} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <p>Book Name: {item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <h3>Total Price: ${totalPrice}</h3>
          <h2>Payment Options</h2>
          <p>Choose your UPI payment option:</p>
          {/* <div className="upi-options">
            <tr>

            <img className="upi-button1" src="https://scoopsquare24.com/wp-content/uploads/2021/05/Google_Pay_Featured-1.jpg" />
            <img className="upi-button1" src="https://tse1.mm.bing.net/th?id=OIP.Y66E8T9c0AmN-16a-XD30wHaHa&pid=Api&P=0&h=180" />
            <img className="upi-button1" src="https://tse4.mm.bing.net/th?id=OIP.piJAvCH7-kxwyV8ODH3b-gHaFj&pid=Api&P=0&h=180" />
            </tr>
 
            {/* <button className="upi-button">UPI 2</button>
            <button className="upi-button">UPI 3</button> 
          </div> */}
          <div className="upi-options">
          <div className="upi-buttons">
              <img className="upi-button1" src="https://scoopsquare24.com/wp-content/uploads/2021/05/Google_Pay_Featured-1.jpg" alt="Google Pay" />
              <img className="upi-button1" src="https://tse1.mm.bing.net/th?id=OIP.Y66E8T9c0AmN-16a-XD30wHaHa&pid=Api&P=0&h=180" alt="UPI Option 2" />
              <img className="upi-button1" src="https://tse4.mm.bing.net/th?id=OIP.piJAvCH7-kxwyV8ODH3b-gHaFj&pid=Api&P=0&h=180" alt="UPI Option 3" />
          </div>
      </div>
      
        </div>
      )}
    </div>
    </div>
  );
};

export default Checkout;
