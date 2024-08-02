import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import HomePage from './Home';
import LoginPage from './Login';
import RegisterPage from './User';
import { CartProvider } from './CartMethod';
import CartPage from './Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CartProvider>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
</BrowserRouter>
</CartProvider>
);

