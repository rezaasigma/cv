
import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: "", // No specific major for middle school
        institution: "SMPN 2 Bawang",
        years: "2021 - 2024",
        description: "Menyelesaikan pendidikan menengah pertama dengan fokus pada pengembangan dasar akademik dan karakter siswa."
    },
    {
        degree: "Pengembangan Perangkat Lunak dan Gim",
        institution: "SMKN 1 Bawang",
        years: "2024 - 2027",
        description: "Mempelajari dasar-dasar pemrograman, pengembangan aplikasi, dan desain gim. Mengembangkan proyek-proyek perangkat lunak dan gim interaktif menggunakan berbagai bahasa pemrograman dan alat pengembangan."
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section py-5">
            <div className="container">
                <h2 className="section-heading text-center mb-5 gradient-text">Education</h2>
                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-content">
                                <h4>{edu.degree}</h4>
                                <h5 className="text-light-emphasis">{edu.institution}</h5>
                                <span className="timeline-date">{edu.years}</span>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
