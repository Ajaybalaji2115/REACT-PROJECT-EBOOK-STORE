// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = () => {
    
//     navigate("/ebook");
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className='newlogin'>
//       <div className="login-container">
//       <div className="login-wrapper">
//         <div className="left-side">
//           <img src="https://tse2.mm.bing.net/th?id=OIP.7y3MX_riRWr9f3ZN1p6eYQHaHa&pid=Api&P=0&h=180" alt="eBook Store Logo" className="logo" />
//           <h2>Welcome to Ajay Balaji Book Store</h2>
//           <p>Your gateway to a world of knowledge</p>
//         </div>
//         <div className="right-side">
//             <h3>Sign In</h3>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button className='newbutton'type="submit" onClick={handleSubmit}>Login</button>
//         </div>
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default Login;
// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the context
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from context

  const handleSubmit = () => {
    login(email, password); // Call the login function
    navigate("/ebook");
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='newlogin'>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="left-side">
            <img src="https://tse2.mm.bing.net/th?id=OIP.7y3MX_riRWr9f3ZN1p6eYQHaHa&pid=Api&P=0&h=180" alt="eBook Store Logo" className="logo" />
            <h2>Welcome to Ajay Balaji Book Store</h2>
            <p>Your gateway to a world of knowledge</p>
          </div>
          <div className="right-side">
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className='newbutton' type="submit" onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
