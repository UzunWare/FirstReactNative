import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const PasswordValidation = () => {
    const [password, setPassword] = useState('')

    return <View>
        <Text>Enter Password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(inputPassword) => {
                setPassword(inputPassword)
            }}
        />
        {password.length < 5 ? <Text>Password must be longer than 5 characters</Text> : <Text>Valid Password!</Text>}
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default PasswordValidation;