import React, { useState } from 'react';
import { Button,View, Text, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Détails Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />

            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
            
            {/* <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                /> */}
        </View>
    );

};

const styles = StyleSheet.create({});

export default DetailsScreen;