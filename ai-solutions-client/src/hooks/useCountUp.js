import { useEffect, useState } from 'react';

export const useCountUp = (end, duration = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);
        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(interval);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [end, duration]);

    return count;
};
