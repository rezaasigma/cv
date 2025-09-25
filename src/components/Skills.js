
import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import './Skills.css';

const skillsData = [
    {
        name: "Programmer",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
        ),
        subSkills: [
            { name: "C#", icon: <i className="devicon-csharp-plain colored"></i>, level: 85, description: "Proficient in C# for game development (Unity) and backend services." },
            { name: "Python", icon: <i className="devicon-python-plain colored"></i>, level: 80, description: "Experienced in Python for scripting, data analysis, and web development." },
            { name: "GDScript", icon: <i className="devicon-gdscript-plain colored"></i>, level: 75, description: "Skilled in GDScript for game logic and development within the Godot Engine." },
            { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i>, level: 70, description: "Frontend development with React and general scripting." }
        ]
    },
    {
        name: "Game Developer",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h-1v-1z"/>
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.123.457-.123.96-.58 1.106l-1.932.518a.5.5 0 0 1-.62-.39c-.123-.457.123-.96.58-1.106zM2.3 5.047a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.123.457-.123.96-.58 1.106l-1.932.518a.5.5 0 0 1-.62-.39c-.123-.457.123-.96.58-1.106zM1.558 7.602a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.123.457-.123.96-.58 1.106l-1.932.518a.5.5 0 0 1-.62-.39c-.123-.457.123-.96.58-1.106zM.808 10.157a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.123.457-.123.96-.58 1.106l-1.932.518a.5.5 0 0 1-.62-.39c-.123-.457.123-.96.58-1.106zM15.2 5.047a.5.5 0 0 0-.354-.613l-1.932-.518a.5.5 0 0 0-.62.39c-.123.457.123.96.58 1.106l1.932.518a.5.5 0 0 0 .62-.39c.123-.457-.123-.96-.58-1.106zM14.442 7.602a.5.5 0 0 0-.354-.613l-1.932-.518a.5.5 0 0 0-.62.39c-.123.457.123.96.58 1.106l1.932.518a.5.5 0 0 0 .62-.39c.123-.457-.123-.96-.58-1.106zM13.692 10.157a.5.5 0 0 0-.354-.613l-1.932-.518a.5.5 0 0 0-.62.39c-.123.457.123.96.58 1.106l1.932.518a.5.5 0 0 0 .62-.39c.123-.457-.123-.96-.58-1.106z"/>
                <path d="M8 3a5 5 0 0 0-4.546 2.916C2.32 6.41 1 7.643 1 9.5 1 11.433 2.567 13 4.5 13H5v-1h-.5a3.5 3.5 0 0 1-3.5-3.5c0-1.701 1.196-3.143 2.813-3.418A5.001 5.001 0 0 1 8 3zm0 1a4 4 0 0 1 3.69 2.319l.29.618a.5.5 0 0 0 .883.16l.23-.39a4 4 0 0 1 3.197-2.488C13.76 4.072 15 5.14 15 6.5 15 7.88 13.88 9 12.5 9H11v1h1.5C14.433 10 16 8.433 16 6.5 16 4.567 14.433 3 12.5 3H8z"/>
            </svg>
        ),
        subSkills: [
            { name: "Unity 3D", icon: <i className="devicon-unity-plain colored"></i>, level: 90, description: "Extensive experience in Unity for 2D/3D game development." },
            { name: "Godot Engine", icon: <i className="devicon-godot-plain colored"></i>, level: 75, description: "Developing games with Godot, leveraging GDScript for logic." },
            { name: "Game Design", icon: <i className="bi bi-pencil-square"></i>, level: 80, description: "Designing engaging mechanics, levels, and narratives." }
        ]
    },
    {
        name: "Editing",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
            </svg>
        ),
        subSkills: [
            { name: "Video Editing", icon: <i className="bi bi-camera-video"></i>, level: 95, description: "Proficient in Adobe Premiere Pro and DaVinci Resolve." },
            { name: "Photo Manipulation", icon: <i className="bi bi-image"></i>, level: 80, description: "Skilled in Adobe Photoshop for image enhancement and graphic design." }
        ]
    },
    {
        name: "3D Modeling",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.55.246 8.092a.5.5 0 0 0 0 .814l5.559 4.447a.5.5 0 0 0 .748 0l5.559-4.447a.5.5 0 0 0 0-.814L10.154 3.55 8.186 1.113zM8 2.193l5.254 2.102L9.5 6.616 8 5.303 6.5 6.616 2.746 4.295 8 2.193zM1.54 8.632l5.237 4.19L11.96 10.1 8 7.803 4.04 10.1 1.54 8.632zM14.46 8.632L10.04 12.822l-1.27-1.016L12.197 8 14.46 8.632z"/>
            </svg>
        ),
        subSkills: [
            { name: "Blender", icon: <i className="devicon-blender-plain colored"></i>, level: 88, description: "Creating high-quality 3D models, animations, and renders." },
            { name: "Maya", icon: <i className="devicon-maya-plain colored"></i>, level: 70, description: "Experience in Maya for advanced 3D modeling and animation." },
            { name: "ZBrush", icon: <i className="devicon-zbrush-plain colored"></i>, level: 75, description: "Digital sculpting for organic and detailed models." }
        ]
    }
];

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBackClick = () => {
        setSelectedCategory(null);
    };

    // Icons for sub-skills: I've used devicon and bootstrap-icons classes.
    // You'll need to add these libraries to your index.html or install them.
    // For devicon: <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    // For bootstrap-icons: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    return (
        <section id="skills" className="skills-section py-5">
            <div className="container">
                <h2 className="section-heading text-center mb-5 gradient-text">My Expertise</h2>

                {!selectedCategory ? (
                    <Fade cascade triggerOnce>
                        <div className="row">
                            {skillsData.map((category, index) => (
                                <div className="col-lg-3 col-md-6 mb-4" key={index} onClick={() => handleCategoryClick(category)}>
                                    <div className="skill-category-card">
                                        <div className="skill-icon mb-3">{category.icon}</div>
                                        <h4 className="skill-name">{category.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>
                ) : (
                    <div>
                        <button className="btn btn-outline-light mb-4" onClick={handleBackClick}>
                            &larr; Back to Categories
                        </button>
                        <h3 className="text-center mb-4 text-light">{selectedCategory.name} Skills</h3>
                        <Fade cascade triggerOnce>
                            <div className="row">
                                {selectedCategory.subSkills.map((skill, index) => (
                                    <div className="col-lg-6 col-md-6 mb-4" key={index}>
                                        <div className="sub-skill-card">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="sub-skill-icon me-3">{skill.icon}</div>
                                                <h5 className="mb-0 text-light">{skill.name}</h5>
                                            </div>
                                            <p className="sub-skill-description text-light-emphasis">{skill.description}</p>
                                            <div className="progress mt-2">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${skill.level}%` }}
                                                    aria-valuenow={skill.level}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {skill.level}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
