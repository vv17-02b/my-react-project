import React from 'react';
import { FaYoutube, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Імпорт іконок

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2025 Володимир Бессалов</p>
                <div className="social-icons">
                    <a href="https://www.youtube.com" target="_blank" className="social-icon">
                        <FaYoutube size={30} /> {/* Іконка YouTube */}
                    </a>
                    <a href="https://www.facebook.com" target="_blank" className="social-icon">
                        <FaFacebookF size={30} /> {/* Іконка Facebook */}
                    </a>
                    <a href="https://t.me" target="_blank" className="social-icon">
                        <FaTelegramPlane size={30} /> {/* Іконка Telegram */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
