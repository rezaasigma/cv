
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="header" smooth={false} duration={0}>MTM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={false} duration={0} offset={-70}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="education" smooth={false} duration={0} offset={-70}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="skills" smooth={false} duration={0} offset={-70}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="portfolio" smooth={false} duration={0} offset={-70}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={false} duration={0} offset={-70}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
