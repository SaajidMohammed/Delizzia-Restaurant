import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/Images/logo2.png"

const Navbar = ({ cartCount, user, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#1e1e1e] text-white flex justify-between items-center px-4 md:px-8 py-4 relative z-50">
            {/* Logo from your original project files */}
            <div className="logo-container">
                <img
                    src={logo}
                    alt="Delizia Logo"
                    className="h-[40px] md:h-[50px] object-contain"
                />
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Links */}
            <nav className={`
                absolute top-full left-0 w-full bg-[#1e1e1e] 
                md:static md:w-auto md:bg-transparent
                flex flex-col md:flex-row items-center 
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 visible py-8 shadow-xl' : 'opacity-0 invisible h-0 md:h-auto md:opacity-100 md:visible md:py-0'}
            `}>
                <ul className="flex flex-col md:flex-row list-none gap-6 md:gap-5 items-center text-lg md:text-base">
                    <li>
                        <Link
                            to="/"
                            className="font-medium text-white no-underline transition-colors duration-200 hover:text-[#f9a825]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    {user && (
                        <li>
                            <a
                                href="#menu"
                                className="font-medium text-white no-underline transition-colors duration-200 hover:text-[#f9a825]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Menu
                            </a>
                        </li>
                    )}
                    <li>
                        <a
                            href="#contact"
                            className="font-medium text-white no-underline transition-colors duration-200 hover:text-[#f9a825]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <Link to="/orders" className="font-medium hover:text-[#f9a825]" onClick={() => setIsMenuOpen(false)}>
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="font-medium hover:text-[#f9a825] flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                                    Cart <span className="bg-[#e67e22] text-xs px-2 py-1 rounded-full">{cartCount}</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => { onLogout(); setIsMenuOpen(false); }} className="font-medium hover:text-[#f9a825] cursor-pointer">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="font-medium hover:text-[#f9a825]" onClick={() => setIsMenuOpen(false)}>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="font-medium hover:text-[#f9a825]" onClick={() => setIsMenuOpen(false)}>
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;