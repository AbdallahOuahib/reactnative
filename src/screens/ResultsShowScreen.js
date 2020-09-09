import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import api from '../api/api';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
console.log(id);
    const searchApiById = (id) => {
        api.getDataById(id)
                .then((response)=>{
                    console.log(response);
                    setResult(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    //   const getResult = async id => {
    //     const response = await yelp.get(`/quotes/id/${id}`);
    //     setResult(response.data);
    //   };

    useEffect(() => {
        searchApiById(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.en}</Text>
            {/* <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />;
                }}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;