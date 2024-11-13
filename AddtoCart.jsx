
// // // import React from 'react';

// // // import { useNavigate } from 'react-router-dom';
// // // import './AddtoCart.css';

// // // const AddToCart = ({ book }) => {
// // //   const navigate = useNavigate();

// // //   const handleAddToCart = () => {
// // //     // Add logic to add the book to the cart
// // //     alert(`${book.title} added to cart!`);
// // //     navigate('/cart'); // Navigate to the Cart page
// // //   };

// // //   return (
// // //     <button className="add-to-cart" onClick={handleAddToCart}>
// // //       Add to Cart
// // //     </button>
// // //   );
// // // };

// // // export default AddToCart;

// import React, { useState ,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Ebookstore.css';
// import axios from 'axios';




// import './AddtoCart.css';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/name'); // Replace with your API URL
//         setCartItems(response.data);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const removeFromCart = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/name/${id}`); // Replace with your API URL
//       setCartItems(cartItems.filter(item => item.id !== id));
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-info">
//                 <p className="cart-item-name">{item.name}</p>
//                 <p className="cart-item-price">${item.price}</p>
//                 <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default Cart;
// import { useLocation } from 'react-router-dom';

// const Cart = () => {
//   const location = useLocation();
//   const cartItems = location.state?.cartItems || [];  // Get cart items from state

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div key={index}>
//             <p>{item.name}</p>
//             <p>{item.price}</p>
//             <img src={item.imageUrl} alt={item.name} />
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext } from 'react';
// import { CartProvider} from './cartContext';

// const Cart = () => {
//   const { cartItems } = useContext(CartProvider);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div key={index}>
//             <p>{item.name}</p>
//             <p>{item.price}</p>
//             <img src={item.imageUrl} alt={item.name} />
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddtoCart.css';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//  import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
//  import {IconButton } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
   const navi=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/cart")
      .then(response => {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0); // Corrected quantity spelling
    setTotalPrice(total);
  };
  const handleBack = () => {
         navi("/");
       };
  const handleRemoveItem = (id) => {
    // Remove item from the cart
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        calculateTotalPrice(cartItems.filter(item => item.id !== id)); // Recalculate total
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  const handleIncrement = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 }; 
    axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
      .then(() => {
        setCartItems(prevItems => 
          prevItems.map(prevItem => 
            prevItem.id === item.id ? updatedItem : prevItem
          )
        );
        calculateTotalPrice(cartItems); // Recalculate total
      })
      .catch(error => {
        console.error('Error updating item quantity:', error);
      });
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 }; 
      axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
        .then(() => {
          setCartItems(prevItems => 
            prevItems.map(prevItem => 
              prevItem.id === item.id ? updatedItem : prevItem
            )
          );
          calculateTotalPrice(cartItems); // Recalculate total
        })
        .catch(error => {
          console.error('Error updating item quantity:', error);
        });
    } else {
      handleRemoveItem(item.id); // Remove item if quantity is 1
    }
  };

  return (
    <div className="cart-container">
       <button onClick={handleBack}>Add</button>
          <h1 className='Cart'>Your Cart</h1>

      {cartItems.length === 0 ? (
         <center>
          <h1 className='Cart1'>Your cart is empty.</h1>
              </center>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => {
              const {id,image,name,price,quantity}=item;
              return(

              <div key={id} className="cart-item">
                <img src={image} alt={name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{name}</p>
                  <p className="cart-item-price">₹{price} x {quantity}</p> 
                  <p className="cart-item-total">Total: ₹{price * quantity}</p> 
                  <div className="quantity-controls">
                 {/* <AddCircleOutlineIcon color='secondary' onClick={() => handleIncrement(item)} />
                  <RemoveCircleOutlineIcon onClick={() => handleDecrement(item)} color='error' /> *//*}
                  </div>
                </div>
              </div>
              )
            }
            )}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Price: ₹{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;*//*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddtoCart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        calculateTotalPrice(cartItems.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing item:', error));
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">₹{item.price} x {item.quantity}</p>
                <p className="cart-item-total">Total: ₹{item.price * item.quantity}</p>
                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <h3>Total Price: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddtoCart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        calculateTotalPrice(cartItems.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing item:', error));
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">₹{item.price} x {item.quantity}</p>
                <p className="cart-item-total">Total: ₹{item.price * item.quantity}</p>
                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <h3>Total Price: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddtoCart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);
/*
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };*//*
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(total);
  };
  

  const handleRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        calculateTotalPrice(cartItems.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing item:', error));
  };

  const handleIncrement = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
      .then(() => {
        setCartItems(prevItems => prevItems.map(prevItem => (prevItem.id === item.id ? updatedItem : prevItem)));
        calculateTotalPrice(cartItems);
      })
      .catch(error => console.error('Error updating item quantity:', error));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
        .then(() => {
          setCartItems(prevItems => prevItems.map(prevItem => (prevItem.id === item.id ? updatedItem : prevItem)));
          calculateTotalPrice(cartItems);
        })
        .catch(error => console.error('Error updating item quantity:', error));
    } else {
      handleRemoveItem(item.id);
    }
  };

  const handleBuyNow = () => {
    // Implement buy now functionality here (e.g., redirect to checkout page)
    alert("Proceeding to checkout!");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">₹{item.price} x {item.quantity}</p>
                <p className="cart-item-total">Total: ₹{item.price * item.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <h3>Total Price: ₹{totalPrice}</h3>
          <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddtoCart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  // const calculateTotalPrice = (items) => {
  //   const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  //   setTotalPrice(total);
  // };
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    setTotalPrice(total);
  };
  
  
  
  <p className="cart-item-price">${(Number(item.price)).toFixed(2)} x {item.quantity}</p>
  <p className="cart-item-total">Total: ${(Number(item.price) * item.quantity).toFixed(2)}</p>
  
  const handleRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        calculateTotalPrice(updatedItems);
      })
      .catch(error => console.error('Error removing item:', error));
  };

  const handleIncrement = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
      .then(() => {
        setCartItems(prevItems => prevItems.map(prevItem => (prevItem.id === item.id ? updatedItem : prevItem)));
        calculateTotalPrice(cartItems.map(prevItem => (prevItem.id === item.id ? updatedItem : prevItem)));
      })
      .catch(error => console.error('Error updating item quantity:', error));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
        .then(() => {
          setCartItems(prevItems => prevItems.map(prevItem => (prevItem.id === item.id ? updatedItem : prevItem)));
          calculateTotalPrice(cartItems.map(prevItem => (prevItem.id === item.id ? updatedItem : prevItem)));
        })
        .catch(error => console.error('Error updating item quantity:', error));
    } else {
      handleRemoveItem(item.id);
    }
  };

  const handleBuyNow = () => {
    // Implement buy now functionality here (e.g., redirect to checkout page)
    alert("Proceeding to checkout!");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddtoCart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/cart")
      .then(response => {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  // const calculateTotalPrice = (items) => {
  //   const total = items.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
  //   setTotalPrice(total);
  // };
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    setTotalPrice(total);
  };
  
  const handleRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        calculateTotalPrice(cartItems.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  const handleIncrement = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
      .then(() => {
        setCartItems(prevItems =>
          prevItems.map(prevItem => prevItem.id === item.id ? updatedItem : prevItem)
        );
        calculateTotalPrice(cartItems);
      })
      .catch(error => {
        console.error('Error updating item quantity:', error);
      });
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      axios.put(`http://localhost:3000/cart/${item.id}`, updatedItem)
        .then(() => {
          setCartItems(prevItems =>
            prevItems.map(prevItem => prevItem.id === item.id ? updatedItem : prevItem)
          );
          calculateTotalPrice(cartItems);
        })
        .catch(error => {
          console.error('Error updating item quantity:', error);
        });
    } else {
      handleRemoveItem(item.id);
    }
  };

  // const handleBuyNow = () => {
  //   // Implement buy now functionality
  //   alert('Proceeding to checkout...');
  //   // You can navigate to a checkout page or implement other logic here
  // };
  const handleBuyNow = () => {
    alert('Move to buy now page');
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };
  
  return (
    <div className="hello">
    <div className="cart-container">
      <h1 className='Cart'>Your Cart</h1>

      {cartItems.length === 0 ? (
        <center>
          <h1 className='Cart1'>Your cart is empty.</h1>
        </center>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => {
              const { id, imageUrl, name, price, quantity } = item;
              return (
                <div key={id} className="cart-item">
           <img src={imageUrl} alt={name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{name}</p>
                    <p className="cart-item-price">${price} x {quantity}</p>
                    <p className="cart-item-total">Total: ${price * quantity}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleIncrement(item)}>+</button>
                      <button onClick={() => handleDecrement(item)}>-</button>
                      <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
             
              );
            })}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={handleBuyNow} className="btn-buy-now">Buy Now</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};


export default Cart;






