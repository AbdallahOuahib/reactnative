import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">

        <Stack.Screen name="Search" 
                      component={SearchScreen} 
                      options={{ title: 'Programming Quotes' }} />

        <Stack.Screen name="Details" 
                      component={DetailsScreen} />

        <Stack.Screen name="ResultsShow" 
                      component={ResultsShowScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;