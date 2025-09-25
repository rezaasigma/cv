
import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import Minigame from './Minigame';
import './About.css';

const About = () => {
    const [activeSection, setActiveSection] = useState(null); // 'playlist' or 'minigame'

    const renderContent = () => {
        if (activeSection === 'playlist') {
            return <MusicPlayer handleClose={() => setActiveSection(null)} />;
        } else if (activeSection === 'minigame') {
            return <Minigame handleClose={() => setActiveSection(null)} />;
        } else {
            return (
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading mb-4 gradient-text">About Me</h2>
                        <p className="text-light-emphasis">
                            Hello! I'm a passionate and versatile creator with a deep-rooted love for technology and art. My journey has led me through the exciting realms of programming, the immersive worlds of game development, the fine art of video editing, and the intricate process of 3D modeling.
                        </p>
                        <p className="text-light-emphasis">
                            Whether I'm architecting clean and efficient code, designing engaging game mechanics, crafting compelling visual narratives, or bringing digital sculptures to life, I am driven by a desire to build and innovate. I thrive on challenges and am constantly exploring new tools and techniques to push the boundaries of what's possible.
                        </p>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-primary me-3" onClick={() => setActiveSection('playlist')}>My Playlist</button>
                            <button className="btn btn-secondary" onClick={() => setActiveSection('minigame')}>Minigame</button>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                {renderContent()}
            </div>
        </section>
    );
};

export default About;
