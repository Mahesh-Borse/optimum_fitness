// useApiData.js

import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch data from an API and store/retrieve it from localStorage.
 * @param {string} key - The key for localStorage where the API response will be stored.
 * @param {string} url - The API URL to fetch data from.
 * @returns {Array} - [data, isLoading, error]
 */
function useFetchData(key, url) {
    const [data, setData] = useState(null);  // State to store the API data
    const [isLoading, setIsLoading] = useState(true);  // State to track loading status
    const [error, setError] = useState(null);  // State to track any errors

    useEffect(() => {
        // First, check if the data exists in localStorage
        const storedData = localStorage.getItem(key);

        if (storedData) {
            // If data is in localStorage, use it
            setData(JSON.parse(storedData));
            setIsLoading(false);  // No need to load data from the API
        } else {
            // If no data in localStorage, fetch from API
            fetch(url + `?limit=100&offset=0`)
                .then((response) => response.json())
                .then((data) => {
                    // Save the API response in localStorage
                    localStorage.setItem(key, JSON.stringify(data));
                    setData(data);  // Update state with API data
                    setIsLoading(false);  // Set loading to false
                })
                .catch((err) => {
                    setError(err);  // Set error if API request fails
                    setIsLoading(false);  // Set loading to false
                });
        }
    }, [key, url]);  // Run effect when key or url changes

    return [data, isLoading, error];
}

export default useFetchData;
