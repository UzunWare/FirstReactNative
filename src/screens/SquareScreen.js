import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import SquareColor from './SquareColor';

const INCREMENT_VALUE = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    };

    return <View>
         
        <SquareColor 
        color="Red" 
        onInc={() => setColor('red', INCREMENT_VALUE)} 
        onDec={() => setColor('red', -1 * INCREMENT_VALUE)}/>
        <SquareColor 
        color="Green" 
        onInc={() => setColor('green', INCREMENT_VALUE)} 
        onDec={() => setColor('green', -1 * INCREMENT_VALUE)}/>
        <SquareColor 
        color="Blue" 
        onInc={() => setColor('blue', INCREMENT_VALUE)} 
        onDec={() => setColor('blue', -1 * INCREMENT_VALUE)}/>

        <View style={{height: 100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
};

const styles = StyleSheet.create({

});

export default SquareScreen;