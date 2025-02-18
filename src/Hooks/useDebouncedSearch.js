import { useEffect } from 'react';

// Create a debounce function
export const useDebouncedSearch = (search, delay, callback) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            callback(search);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [search, delay, callback]);
};

