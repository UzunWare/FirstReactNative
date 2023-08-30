import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreenExercise = () => {
    return <View>
        <View style={styles.header}><Text  style={styles.textStyle}>App</Text></View>
        <View style={styles.viewStyle}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
        </View>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    header: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        padding: 15
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    },
});

export default BoxScreenExercise;