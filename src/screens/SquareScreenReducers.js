import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import SquareColor from './SquareColor';

const INCREMENT_VALUE = 10;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: 'red' || 'green' || 'blue', payload: 15 || -15}

    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreenReducers = () => {
    const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return <View>
         
        <SquareColor 
        color="Red" 
        onInc={() => runMyReducer({type:'change_red', payload: INCREMENT_VALUE})} 
        onDec={() => runMyReducer({type:'change_red', payload: -1 * INCREMENT_VALUE})}/>
        <SquareColor 
        color="Green" 
        onInc={() => runMyReducer({type:'change_green', payload: INCREMENT_VALUE})} 
        onDec={() => runMyReducer({type:'change_green', payload: -1 * INCREMENT_VALUE})}/>
        <SquareColor 
        color="Blue" 
        onInc={() => runMyReducer({type:'change_blue', payload: INCREMENT_VALUE})} 
        onDec={() => runMyReducer({type:'change_blue', payload: -1 * INCREMENT_VALUE})}/>

        <View style={{height: 100, width:100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
    </View>
};

const styles = StyleSheet.create({

});

export default SquareScreenReducers;