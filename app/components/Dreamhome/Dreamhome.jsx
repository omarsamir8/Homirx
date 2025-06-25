'use client'
import './Dreamhome.css';
import { useState, useEffect } from "react";

function Dreamhome() {
    const backgrounds = [
        "/Assets/gallery-3.jpg",
        "/Assets/listing-13-600x385.jpg",
        "/Assets/gallery-3.jpg",
        "/Assets/listing-13-600x385.jpg",
    ];

    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 3000);
        return () => clearInterval(interval); // Cleanup interval
    }, []);

    return (
        <div
            className="Dreamhome"
            style={{
                height: "40vh",
                transition:"background-image 1s ease-in-out",
                backgroundImage: `url(${backgrounds[currentBg]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
            }}
        >
            <h2 style={{fontSize:"26px"}}>Future Dream Home</h2>
            <p>Providing the best Real Estate Services</p>
        </div>
    );
}

export default Dreamhome;
