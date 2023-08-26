import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';

const SquareColor = (props) => {    
    return <View>
        <Text>{props.color}</Text>
        <Button title={`Increase ${props.color}`} onPress={() => {
            props.onInc()

        }}/>
        <Button title={`Decrease ${props.color}`} onPress={() => {
            props.onDec()

        }}/>
    </View>
};

export default SquareColor;