
import React, { useState, useEffect } from 'react';

const TextCycler = ({ texts, speed = 100, delay = 1500 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typer;
        const handleTyping = () => {
            const fullText = texts[currentTextIndex];
            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            if (!isDeleting && displayedText === fullText) {
                // Pause at end of typing
                typer = setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && displayedText === '') {
                // Pause at end of deleting, then move to next text
                setIsDeleting(false);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        };

        const timeoutSpeed = isDeleting ? speed / 2 : speed; // Faster deleting
        typer = setTimeout(handleTyping, timeoutSpeed);

        return () => clearTimeout(typer);
    }, [displayedText, isDeleting, currentTextIndex, texts, speed, delay]);

    return <>{displayedText}</>;
};

export default TextCycler;
