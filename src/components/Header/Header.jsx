// src/components/Header.jsx
import React from "react";
import { useSpring, animated } from 'react-spring';
// import "./Header.css"; 
const Header = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

    return (
        <header className="hero">
            <div className="container">
                <animated.div style={fadeIn}>
                    <div className="profile-wrapper">
                        <div className="animated-border"></div>
                        <img src="./assets/photo-2.jpg" alt="Фото Володимир Бессалов" className="profile-img" />
                    </div>
                    <h1>Володимир Бессалов</h1>
                    <p>Front-End Розробник</p>
                    <a href="https://www.linkedin.com/in/vladimir-bessalov-1a8b03264" target="_blank" className="btn">LinkedIn</a>
                </animated.div>
            </div>
        </header>
    );
  };
export default Header;
