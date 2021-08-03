import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'wollongong'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong. Please try again later');
        }
    };

    // With the square bracket, it allows the program to know that the arrow function is only to be run ONCE when the component is first rendered
    useEffect(() => {
        searchApi('burger');
    }, []);

    return [searchApi, results, errorMessage];
};