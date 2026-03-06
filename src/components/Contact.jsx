import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xbljrgyp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          alert("Message sent successfully!");
          form.reset();
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => alert("Oops! Something went wrong."));
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="./assets/images/contact.jpg" alt="Contact" />
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="field">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <i className="fas fa-user field-icon"></i>
              </div>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <i className="fas fa-envelope field-icon"></i>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <i className="fas fa-phone-alt field-icon"></i>
              </div>
              <div className="message">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <i className="fas fa-comment-dots msg-icon"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
