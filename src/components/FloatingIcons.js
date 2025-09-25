
import React from 'react';
import './FloatingIcons.css';

const FloatingIcons = ({ icons }) => {
    return (
        <div className="floating-icons-container">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="floating-icon"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                    }}
                >
                    {icon}
                </div>
            ))}
        </div>
    );
};

export default FloatingIcons;
