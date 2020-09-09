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
    
    
    //Call API in react native
    // const searchApi = async searchTerm => {
    //     console.log('Hi there!');
    //     try {
    //         const response = await rapidApi.get('/get_news/v1/us', {
    //             params: {
    //                 term: searchTerm
    //             }
    //         });
            
    //         setResults(response);
    //     } catch (err) {
    //         setErrorMessage('Something went wrong');
    //     }
    // }

    //useEffect is hook executed one time with empty array as argument
    useEffect(() => {
        searchApi('');
    }, []);
    
    return [searchApi, results, errorMessage];
}