import React, { useEffect, useRef } from 'react';

const TypeWriter = () => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        if (window.Typewriter) {
            const typewriter = new window.Typewriter(typewriterRef.current, {
                loop: true,
                delay: 75,
            });

            typewriter
                .typeString('un servicio personalizado')
                .pauseFor(1000)
                .deleteAll()
                .typeString('productos de calidad')
                .pauseFor(1000)
                .deleteAll()
                .typeString('precios justos')
                .pauseFor(1000)
                .deleteAll()
                .start();
        }
    }, []);

    return <span id="typewriter" ref={typewriterRef}></span>;
};

export default TypeWriter;
