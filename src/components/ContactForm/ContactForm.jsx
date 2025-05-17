// src/components/ContactForm.jsx
import React, { useState } from "react";
// import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('Дякуємо! Ваше повідомлення надіслано.');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    alert('Упс! Щось пішло не так...');
                }
            });
    };

    return (
        <section className="contact">
            <div className="container">
                <h2>Зв'язатися зі мною</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше ім’я" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ваш Email" required />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Ваше повідомлення" required></textarea>
                    <button type="submit" className="btn">Надіслати</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;