import { useEffect, useState } from 'react';

export function useGetDimension() {
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handler = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return dimension;
}
