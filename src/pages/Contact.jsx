import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

   

  return (
    <>
    <nav className="navbar">
      <div className="navbar__logo">Panda Productions</div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies/:id">Movies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <section className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn__contact" type="submit">Send Message</button>
      </form>
      </section>
    </>
  );
};
export default Contact;
