import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function ContactMe() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "",
                "", //template_ID
                e.target,
                "" //Password
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setError(false);
                    setFormData({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                },
                () => {
                    setStatus("Oops! Something went wrong. Please try again.");
                    setError(true);
                }
            );
    };

    return (
        <div className="contact-container">
            <section className="contact-section">
                <h1 className="Title">Contact Us</h1>
                <p className="contact-description">
                    Feel free to reach out using the form below. We'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Send Message
                    </button>

                    {status && (
                        <p className={`status-message ${error ? "error" : "success"}`}>
                            {status}
                        </p>
                    )}
                </form>
            </section>
        </div>
    );
}

export default ContactMe;
