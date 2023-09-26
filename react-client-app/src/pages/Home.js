import React, { useState, useEffect } from 'react';
import '../styles//Home.css';

function Home() {
    const fullName = "Ethan Sheridan Smith";
    const [text, setText] = useState('');
    const [reverse, setReverse] = useState(false);
    const [delay, setDelay] = useState(200); // Initial delay for typing

    useEffect(() => {
        const timer = setInterval(() => {
            if (!reverse && text.length < fullName.length) {
                setText(fullName.substring(0, text.length + 1));
                if (text.length + 1 === fullName.length) {
                    // Once typing is complete, we introduce a pause of 2 seconds
                    clearInterval(timer);
                    setTimeout(() => {
                        setDelay(100); // Set deletion speed faster
                        setReverse(true);
                    }, 2000);
                }
            } else if (reverse && text.length > 0) {
                setText(text.substring(0, text.length - 1));
                if (text.length === 1) {
                    setReverse(false);
                    setDelay(200); // Reset to typing speed after deletion
                }
            }
        }, delay);

        return () => clearInterval(timer);
    }, [text, reverse, delay]);

    return (
        <div className="home-container">
            <h1 className="home-title">{text}<span className="cursor">|</span></h1>
        </div>
    );
}

export default Home;
