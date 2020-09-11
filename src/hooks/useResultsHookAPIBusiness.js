import { useEffect, useState } from 'react';
//import rapidApi from '../api/rapidApi';
import api from '../api/api';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    // fetches data
    const searchApi = () => {
        api.getData()
                .then((response)=>{
                    setResults(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    //useEffect is hook executed one time with empty array as argument
    useEffect(() => {
        searchApi('');
    }, []);
    
    return [searchApi, results, errorMessage];
}