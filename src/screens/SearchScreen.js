import React, { useState } from 'react';
import { Button,View, Text, StyleSheet, ScrollView } from 'react-native';
//import SearchBar from '../components/SearchBar';
import useResultsHookAPIBusiness from '../hooks/useResultsHookAPIBusiness';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResultsHookAPIBusiness();
    //console.log(results);
    return (
        <>
            {/* <ScrollView> */}
                {/* <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                /> */}
                <ResultsList
                    results={results}
                    title="Programming Wisdom"
                />
            {/* </ScrollView> */}
        </>
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;