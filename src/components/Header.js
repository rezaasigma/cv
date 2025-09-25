
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import TypewriterEffect from './TypewriterEffect';
import TextCycler from './TextCycler';
import FloatingIcons from './FloatingIcons';
import Particles from '@tsparticles/react';
import './Header.css';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const skills = ["Programmer", "Game Developer", "Editing", "3D Modeling"];
    const floatingSkillIcons = [
        <i className="devicon-csharp-plain colored"></i>,
        <i className="devicon-python-plain colored"></i>,
        <i className="devicon-unity-plain colored"></i>,
        <i className="devicon-blender-plain colored"></i>,
        <i className="bi bi-camera-video"></i>, // Video Editing
        <i className="bi bi-code-slash"></i>, // General Programming
        <i className="bi bi-controller"></i>, // Game Dev
        <i className="bi bi-box"></i>, // 3D Modeling
        <i className="devicon-godot-plain colored"></i>,
        <i className="devicon-javascript-plain colored"></i>,
    ];

    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    const particlesOptions = {
        background: {
            color: {
                value: "#121212", // Dark background
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#00FFFF", // Neon blue particles
            },
            links: {
                color: "#00FFFF",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <header id="header" className="header-section">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
            />
            <div className="container text-center header-content">
                <FloatingIcons icons={floatingSkillIcons} />
                <Fade direction="down" triggerOnce>
                    <img
                        src={isHovered ? "/images/fern.jpeg" : "/images/profil.JPG"}
                        alt="Profile"
                        className="profile-bubble mb-3"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </Fade>
                <Fade direction="down" triggerOnce>
                    <h1 className="display-3 gradient-text">
                        <TypewriterEffect text="Muhammad Thoriza Ma'ali" speed={100} />
                    </h1>
                </Fade>
                <Fade direction="up" delay={500} triggerOnce>
                    <p className="lead">
                        <TextCycler texts={skills} speed={100} delay={1500} />
                    </p>
                </Fade>
                <Fade direction="up" delay={700} triggerOnce>
                    <div className="header-buttons mt-4">
                        <a href="/images/cv.pdf" download className="btn btn-primary btn-lg mx-2">Download CV</a>
                        <a href="#contact" className="btn btn-outline-light btn-lg mx-2">Contact</a>
                        <a href="#portfolio" className="btn btn-outline-light btn-lg mx-2">Projects</a>
                    </div>
                </Fade>
            </div>
        </header>
    );
};

export default Header;
