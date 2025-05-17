// src/hooks/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, options = {}) => {
    useEffect(() => {
        ScrollReveal().reveal(selector, {
            origin: "bottom",
            distance: "50px",
            duration: 800,
            delay: 100,
            reset: true,
            ...options,
        });
    }, [selector, options]);
};

export default useScrollReveal;
