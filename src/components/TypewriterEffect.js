
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed = 100, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setStartTyping(false);

        const initialDelayTimeout = setTimeout(() => {
            setStartTyping(true);
        }, delay);

        return () => clearTimeout(initialDelayTimeout);
    }, [text, delay]);

    useEffect(() => {
        if (!startTyping) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, speed, text, startTyping]);

    return <>{displayedText}</>;
};

export default TypewriterEffect;
