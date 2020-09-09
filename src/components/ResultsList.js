import React from 'react';
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';//to still use navigation without the parant component
import ResultsDetail from './ResultsDetail';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={results}
        //keyExtractor={result => result.id}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }>
                <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);