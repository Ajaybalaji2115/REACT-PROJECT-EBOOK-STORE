import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import EbookStore from './Ebookstore';
import Materialgrid from './materialui';
import Ajaybal from './axios2';
import AddToCart from './addtocartebook';
import Login from './Login';
import { AuthProvider } from './AuthContext';
ReactDOM.render(
  <AuthProvider>
  <App />
</AuthProvider>,
  document.getElementById('root')
);
