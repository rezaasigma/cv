
import React from 'react';
import './Portfolio.css';

const portfolioData = [
    {
        title: "3D Modeling Project",
        description: "Membuat model 3D menggunakan Blender untuk keperluan animasi dan game.",
        imageUrl: "/gambar_projek_1.png"
    },
    {
        title: "2D Game Development",
        description: "Mengembangkan game 2D sederhana menggunakan Godot Engine dan GodotScript.",
        imageUrl: "/gambar_projek_2.jpg"
    },
    {
        title: "Website PPDB Online",
        description: "Membuat website PPDB online menggunakan PHP dan MySQL.",
        imageUrl: "/gambar_projek_3.jpg"
    },
    {
        title: "3D Modeling School",
        description: "Membuat model 3D sekolah menggunakan Blender untuk menambah pengetahuan dan portfolio.",
        imageUrl: "/gambar_projek_4.png"
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section py-5">
            <div className="container">
                <h2 className="section-heading text-center mb-5 gradient-text">My Work</h2>
                <div className="row">
                    {portfolioData.map((project, index) => (
                        <div className="col-lg-6 col-md-6 mb-4" key={index}>
                            <div className="portfolio-card">
                                <img src={project.imageUrl} alt={project.title} className="card-img-top" />
                                <div className="portfolio-card-body">
                                    <h4 className="portfolio-title">{project.title}</h4>
                                    <p className="portfolio-description text-light-emphasis">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
