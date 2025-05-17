// App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Slider from "./components/Slider/Slider";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

const App = () => {
    const [users, setUsers] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useScrollReveal(".about, .skills, .slider, .contact");

    
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Slider />
            <ContactForm />
            <Footer />
        </>
    );
};

export default App;
