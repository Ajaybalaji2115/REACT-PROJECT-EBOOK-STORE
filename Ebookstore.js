
// import React, { useState ,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Ebookstore.css';
// import axios from 'axios';










// // const addToCart = async (product) => {
// //   try {
// //     const response = await axios.post('http://localhost:3000/name', product);
// //     alert(`${product.name} added to cart!`);
// //   } catch (error) {
// //     console.error('Error adding item to cart', error);
// //   }
// // };
// const EbookStore = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products] = useState([
//     { name: "ATOMIC HABITS", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "PSYCHOLOGY OF MONEY", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71XEsXS5RlL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "EVERYONE HAS A STORY", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71epLzaqM-L._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "HARRY POTTER AND THE PHILOSOPHER'S STONE", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "THE PURSUIT OF HAPPINESS", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/61f6A0zaq2L._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "ALADDIN", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/51OXhs+IDsL._AC_SF480,480_.jpg" },
//     { name: "ALL THE WORLD'S A STAGE", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/91y-+Ybz2iL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "CINDERELLA", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/91N8DadokxL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "LIFE OF PI", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/816NlEQFMOL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "INDIA IN SPACE", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/819WasbUIPL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "JUNGLE BOOK", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81EoLfqkRRL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "THE ALCHEMIST", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "YOU ARE BORN TO BLOSSOM", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71RatA+9EzL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "TWELFTH FAIL", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81QOMjpuQpL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "PIRATES OF CARIBBEAN", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/91vz74KKehL._AC_UY327_FMwebp_QL65_.jpg" },

//   ]);

//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [cartItems, setCartItems] = useState([]);
//   const handleSearch = (event) => {
//     event.preventDefault();
//     const query = searchQuery.toLowerCase();
//     const filtered = products.filter(product =>
//       product.name.toLowerCase().includes(query)
//     );
//     setFilteredProducts(filtered);
    
// const addToCart = async (product) => {

//   try {
//     const response = await axios.post('http://localhost:3000/name', product);
//     setCartItems((prevItems) => [...prevItems, product]); // Update state
//     alert(`${product.name} added to cart!`);
//   } catch (error) {
//     console.error('Error adding item to cart', error);
//   }
// };

// const deleteCartItem = async (productId) => {
//   try {
//     await axios.delete(`http://localhost:3000/name/${productId}`);
//     alert('Item removed from cart!');
//   } catch (error) {
//     console.error('Error deleting item from cart', error);
//   }
// };

//   };

//   return (
    
//     <div className="ebook-store">
//       <header className="header">
//         <h1>Ajay Balaji Book Store</h1>
//         <div className="navigation-buttons">
//           <button onClick={() => navigate("/aboutus")}>About Us</button>
//           <button onClick={() => navigate("/ebook")}>Home</button>
//           <button onClick={() => navigate("/contact")}>Contact Us</button>
//           <button onClick={() => navigate("/")}>Login</button>
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//           <button onClick={() => navigate("/cart")}>Cart</button>
//         </div>
//       </header>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for eBooks..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div className="book-gallery">
//         {filteredProducts.map((product, index) => (
//           <div className="product-item" key={index}>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="product-image"
//             />
//             <div className="product-info">
//               <p className="product-name">{product.name}</p>
//               <p className="product-price">{product.price}</p>
//               <button className="btn btn-primary" onClick={() => alert("Book added to Cart")}>Buy Now</button>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
// <button onClick={() => deleteCartItem(product.name)}>Remove from Cart</button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EbookStore;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Ebookstore.css';
// import axios from 'axios';

// const EbookStore = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products] = useState([
//     { name: "ATOMIC HABITS", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "PSYCHOLOGY OF MONEY", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71XEsXS5RlL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "EVERYONE HAS A STORY", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71epLzaqM-L._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "HARRY POTTER AND THE PHILOSOPHER'S STONE", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "THE PURSUIT OF HAPPINESS", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/61f6A0zaq2L._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "ALADDIN", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/51OXhs+IDsL._AC_SF480,480_.jpg" },
//     { name: "ALL THE WORLD'S A STAGE", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/91y-+Ybz2iL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "CINDERELLA", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/91N8DadokxL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "LIFE OF PI", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/816NlEQFMOL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "INDIA IN SPACE", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/819WasbUIPL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "JUNGLE BOOK", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81EoLfqkRRL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "THE ALCHEMIST", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "YOU ARE BORN TO BLOSSOM", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/71RatA+9EzL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "TWELFTH FAIL", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/81QOMjpuQpL._AC_UY327_FMwebp_QL65_.jpg" },
//     { name: "PIRATES OF CARIBBEAN", price: "$999.99", imageUrl: "https://m.media-amazon.com/images/I/91vz74KKehL._AC_UY327_FMwebp_QL65_.jpg" },
//   ]);

//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [cartItems, setCartItems] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     const query = searchQuery.toLowerCase();
//     const filtered = products.filter(product =>
//       product.name.toLowerCase().includes(query)
//     );
//     setFilteredProducts(filtered);
//   };

//   // const addToCart = async (product) => {
//   //   try {
//   //     await axios.post('http://localhost:3000/name', product);
//   //     setCartItems((prevItems) => [...prevItems, product]);
//   //     alert(`${product.name} added to cart!`);
//   //   } catch (error) {
//   //     console.error('Error adding item to cart', error);
//   //   }
//   // };
//   const addToCart = async (product) => {
//     try {
//       await axios.post('http://localhost:3000/name', product);
//       setCartItems((prevItems) => [...prevItems, product]);
//       alert(`${product.name} added to cart!`);
//     } catch (error) {
//       console.error('Error adding item to cart', error);
//     }
//   };
  
//   // Navigate to Cart Page and pass cart items
//   const goToCart = () => {
//     navigate("/cart", { state: { cartItems } });  // Passing cartItems to Cart page
//   };
  
//   const deleteCartItem = async (productName) => {
//     try {
//       await axios.delete(`http://localhost:3000/name/${productName}`);
//       setCartItems((prevItems) => prevItems.filter(item => item.name !== productName));
//       alert('Item removed from cart!');
//     } catch (error) {
//       console.error('Error deleting item from cart', error);
//     }
//   };

//   return (
//     <div className="ebook-store">
//       <header className="header">
//         <h1>Ajay Balaji Book Store</h1>
//         <div className="navigation-buttons">
//           <button onClick={() => navigate("/aboutus")}>About Us</button>
//           <button onClick={() => navigate("/ebook")}>Home</button>
//           <button onClick={() => navigate("/contact")}>Contact Us</button>
//           <button onClick={() => navigate("/")}>Login</button>
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//           <button onClick={() => navigate("/cart")}>Cart</button>
//           <button onClick={goToCart}>View Cart</button>

//         </div>
//       </header>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for eBooks..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div className="book-gallery">
//         {filteredProducts.map((product, index) => (
//           <div className="product-item" key={index}>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="product-image"
//             />
//             <div className="product-info">
//               <p className="product-name">{product.name}</p>
//               <p className="product-price">{product.price}</p>
//               <button className="btn btn-primary" onClick={() => alert("Book added to Cart")}>Buy Now</button>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//               <button onClick={() => deleteCartItem(product.name)}>Remove from Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default EbookStore;
// import React, { useState, useEffect, useContext } from 'react';
// import { CartProvider } from './cartContext';

// const EbookStore = () => {
//   const { addToCart } = useContext(CartProvider);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('/path/to/books.json')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="ebook-store">
//       <div className="book-gallery">
//         {products.map((product) => (
//           <div className="product-item" key={product.id}>
//             <img src={product.imageUrl} alt={product.name} className="product-image" />
//             <div className="product-info">
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EbookStore;
/*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import '../styles/Homepage.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { IconButton } from '@mui/material';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const ToCart = () => {
    navi("/cart");
  }

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      axios.put(`http://localhost:3000/cart/${existingCartItem.id}`, updatedItem)
        .then(() => {
          setCartItems(updatedItem);
        })
        .catch(error => {
          console.error('Error updating cart item:', error);
        });
    } else {
      const newItem = { ...product, quantity: 1 };
      axios.post('http://localhost:3000/cart', newItem)
        .then(() => {
          setCartItems(prevItems => [...prevItems, newItem]);
        })
        .catch(error => {
          console.error('Error adding cart item:', error);
        });
    }
  };

  const categories = {
    Mobiles: products.filter(product => product.category === 'Mobile'),
    TVs: products.filter(product => product.category === 'TV'),
    Watches: products.filter(product => product.category === 'Watch'),
    Shoes: products.filter(product => product.category === 'Shoe'),
    Laptops: products.filter(product => product.category === 'Laptop')

  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="header-content">
          <h1 className="homepage-title" style={{fontFamily:"Georgia"}}>LG Store</h1>
        </div>
        <nav className="homepage-nav">
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link signup-button">Sign Up</Link>
          <button onClick={ToCart}>Add to cart</button>
        </nav>
      </header>
      <main className="homepage-main">
        <section className="homepage-search">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </section>
        <section className="homepage-products">
          {Object.entries(categories).map(([categoryName, items]) => (
            <div key={categoryName} className="product-category">
              <h2>{categoryName}</h2>
              <div className="product-list">
                {items.map((product) => {
                  const { id, image, name, price } = product;
                  return (
                    <div key={id} className="product-item">
                      <img src={image} alt={name} />
                      <p className="product-name">{name}</p>
                      <p className="product-price">₹{price}</p>
                      <button className='but' type='button' onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="homepage-footer">
        <div className="footer-content">
          <p>&copy; 2024 LG STORE. All rights reserved.</p>
          <div className="contact-info">
            <p>Contact Number: <a href="tel:6381414205">638-141-4205</a></p>
            <p>Email: <a href="mailto:GKstore@gk.ac.in">GKstore@gk.ac.in</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;*//*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Ebookstore.css'; // Make sure to uncomment this

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));

    axios.get('http://localhost:3000/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const ToCart = () => {
    navi("/cart");
  };

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      axios.put(`http://localhost:3000/cart/${existingCartItem.id}`, updatedItem)
        .then(() => setCartItems(updatedItem))
        .catch(error => console.error('Error updating cart item:', error));
    } else {
      const newItem = { ...product, quantity: 1 };
      axios.post('http://localhost:3000/cart', newItem)
        .then(() => setCartItems(prevItems => [...prevItems, newItem]))
        .catch(error => console.error('Error adding cart item:', error));
    }
  };

  const categories = {
    Mobiles: products.filter(product => product.category === 'Mobile'),
    TVs: products.filter(product => product.category === 'TV'),
    Watches: products.filter(product => product.category === 'Watch'),
    Shoes: products.filter(product => product.category === 'Shoe'),
    Laptops: products.filter(product => product.category === 'Laptop')
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="header-title">LG Store</h1>
        <nav className="navigation-buttons">
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link signup-button">Sign Up</Link>
          <button onClick={ToCart}>Cart</button>
        </nav>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="book-gallery">
        {Object.entries(categories).map(([categoryName, items]) => (
          <div key={categoryName} className="product-category">
            <h2>{categoryName}</h2>
            <div className="product-list">
              {items.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">₹{product.price}</p>
                  <button className="btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer className="homepage-footer">
        <p>&copy; 2024 LG STORE. All rights reserved.</p>
        <div className="contact-info">
          <p>Contact Number: <a href="tel:6381414205">638-141-4205</a></p>
          <p>Email: <a href="mailto:GKstore@gk.ac.in">GKstore@gk.ac.in</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;*//*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Ebookstore.css'; // Make sure to uncomment this

const EbookStore = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));

    axios.get('http://localhost:3000/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      axios.put(`http://localhost:3000/cart/${existingCartItem.id}`, updatedItem)
        .then(() => setCartItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item)))
        .catch(error => console.error('Error updating cart item:', error));
    } else {
      const newItem = { ...product, quantity: 1 };
      axios.post('http://localhost:3000/cart', newItem)
        .then(() => setCartItems(prevItems => [...prevItems, newItem]))
        .catch(error => console.error('Error adding cart item:', error));
    }
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="ebook-store">
      <header className="header">
        <h1 className="header-title">Ajay Balaji Book Store</h1>
        <nav className="navigation-buttons">
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <button onClick={goToCart}>Cart</button>
        </nav>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search for eBooks..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      <div className="book-gallery">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2024 Ajay Balaji Book Store. All rights reserved.</p>
        <div className="contact-info">
          <p>Contact Number: <a href="tel:6381414205">638-141-4205</a></p>
          <p>Email: <a href="mailto:GKstore@gk.ac.in">GKstore@gk.ac.in</a></p>
        </div>
      </footer>
    </div>
  );
};

export default EbookStore;*/
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Ebookstore.css';

const EbookStore = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));

    axios.get('http://localhost:3000/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    alert('Book added to cart');
    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      axios.put(`http://localhost:3000/cart/${existingCartItem.id}`, updatedItem)
        .then(() => setCartItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item)))
        .catch(error => console.error('Error updating cart item:', error));
    } else {
      const newItem = { ...product, quantity: 1 };
      axios.post('http://localhost:3000/cart', newItem)
      
        .then(() => setCartItems(prevItems => [...prevItems, newItem]))
        .catch(error => console.error('Error adding cart item:', error));
       
    }
  };

  const handleRemoveFromCart = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing cart item:', error));
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="ebook-store">
      <header className="header">
        <h1 className="header-title">Ajay Balaji Book Store</h1>
        <nav className="navigation-buttons">
        <button><Link to="/aboutus" className="nav-link">About Us</Link></button>  
        <button><Link to="/contact" className="nav-link">Contact Us</Link></button>  
      <button> <Link to="/" className="nav-link">Login</Link></button>   
   <button>     <Link to="/signup" className="nav-link">Sign Up</Link></button>  
          <button onClick={goToCart}>Cart</button>
        </nav>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search for eBooks..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      <div className="book-gallery">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-items">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name} - Quantity: {item.quantity}</p>
              <button className="btn-remove" onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>&copy; 2024 Ajay Balaji Book Store. All rights reserved.</p>
        <div className="contact-info">
          <p>Contact Number: <a href="tel:6381414205">638-141-4205</a></p>
          <p>Email: <a href="mailto:GKstore@gk.ac.in">GKstore@gk.ac.in</a></p>
        </div>
      </footer>
    </div>
  );
};

export default EbookStore;


