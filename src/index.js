import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './components/CartContext';  // ✅ Cart Context
import App from './components/App';                  
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/Dashboard';
import OrderBooking from './components/OrderBooking';
import Pizza from './components/pizza/Pizza';
import PizzaDetail from './components/pizza/PizzaDetail';
import BuyNow from './components/pizza/BuyNow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <CartProvider> {/* ✅ Wrap entire app for cart functionality */}
        <Routes>
          <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
            {/* ✅ Nested Routes will render inside App's <Outlet /> */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pizza" element={<Pizza />} />
            <Route path="pizza/:id" element={<PizzaDetail />} />
            <Route path="buy-now" element={<BuyNow />} />
            <Route path="order-booking" element={<OrderBooking />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
