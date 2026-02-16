import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuCategory from './pages/MenuCategory';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  // Initialize state from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [showScroll, setShowScroll] = useState(false);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]); // Clear cart on logout
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to cart!`);
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    
    const totalAmount = cart.reduce((acc, item) => {
      return acc + parseInt(item.price.replace('₹', ''));
    }, 0);

    const newOrder = {
      id: Date.now(),
      items: [...cart],
      total: totalAmount,
      date: new Date().toLocaleString()
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    setCart([]); // Clear cart after ordering
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Persistent Navigation Bar */}
        <Navbar cartCount={cart.length} user={user} onLogout={handleLogout} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Route for the landing page (index.html content) */}
            <Route path="/" element={<Home user={user} />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            
            {/* Route for the Cart page */}
            <Route path="/cart" element={user ? <Cart cartItems={cart} /> : <Navigate to="/login" />} />

            {/* Route for Checkout */}
            <Route path="/checkout" element={user ? <Checkout cartItems={cart} onPlaceOrder={placeOrder} /> : <Navigate to="/login" />} />

            {/* Route for Orders */}
            <Route path="/orders" element={user ? <Orders orders={orders} /> : <Navigate to="/login" />} />

            {/* Dynamic route for varieties (pizza.html, pasta.html, etc.) */}
            <Route path="/:categorySlug" element={user ? <MenuCategory addToCart={addToCart} /> : <Navigate to="/login" />} />
          </Routes>
        </main>

        {/* Persistent Footer with Contact Details */}
        <Footer />

        {/* Back to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#e67e22] text-white p-3 rounded-full shadow-lg hover:bg-[#d35400] transition-all duration-300 z-50"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;