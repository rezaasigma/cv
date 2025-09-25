
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section text-center py-4">
            <div className="container">
                <p className="mb-0 text-light-emphasis">
                    &copy; {new Date().getFullYear()} Muhammad Thoriza Ma'ali. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
