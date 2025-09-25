
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading mb-4 gradient-text">Get In Touch</h2>
                        <p className="lead mb-5 text-light-emphasis">
                            I'm currently open to new opportunities and collaborations. If you have a project in mind, a question, or just want to say hello, feel free to reach out.
                        </p>
                        <div className="contact-buttons">
                            <a href="https://wa.me/6289692877792" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg mx-2">
                                <i className="bi bi-whatsapp me-2"></i> WhatsApp
                            </a>
                            <a href="mailto:thorizamaali@gmail.com" className="btn btn-primary btn-lg mx-2">
                                <i className="bi bi-envelope-fill me-2"></i> Email Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
