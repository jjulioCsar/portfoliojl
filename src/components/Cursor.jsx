import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only apply on non-touch devices
        if (window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('css-hover-lift') ||
                e.target.closest('.css-hover-lift')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', mouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', mouseOver);
        };
    }, []);

    if (window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <div
                className="cursor-dot"
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            ></div>
            <div
                className={`cursor-outline ${isHovering ? 'scale-up' : ''}`}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            ></div>
        </>
    );
};

export default Cursor;
