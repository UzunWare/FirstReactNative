import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Box #1</Text>
        <Text style={styles.textTwoStyle}>Box #2</Text>
        <Text style={styles.textThreeStyle}>Box #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        position: 'absolute',
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        
    }
});

export default BoxScreen;