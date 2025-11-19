'use client';

import { useEffect, useState } from 'react';

export default function FontAwesomeLoader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Load Font Awesome only on client side
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/ce768f010e.js';
        script.crossOrigin = 'anonymous';
        script.defer = true;
        script.onload = () => setLoaded(true);
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null;
}
