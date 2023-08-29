import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const TextScreen = () => {
    const [input, setInput] = useState("")

    return <View>
        <Text>Enter Name:</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={input}
            onChangeText={(newInput) => {
                setInput(newInput)
            }}
        />
        <Text>Your Input is {input}</Text>
        {true ? <Text>That was true</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;