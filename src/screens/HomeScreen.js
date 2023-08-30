import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button title="Go to List Demo" onPress={() => navigation.navigate('List2')}/>
      <Button title="Go to Image Screen" onPress={() => navigation.navigate('Image')} />
      <Button title="Go to Image Screen 2" onPress={() => navigation.navigate('Image2')} />
      <Button title="Go to Counter Screen" onPress={() => navigation.navigate('Counter')} />
      <Button title="Go to Color Screen" onPress={() => navigation.navigate('Color')} />
      <Button title="Go to Square Screen" onPress={() => navigation.navigate('Square')} />
      <Button title="Go to Square Screen Reducers" onPress={() => navigation.navigate('SquareReducers')} />
      <Button title="Go to Counter Screen Reducers" onPress={() => navigation.navigate('CounterReducer')} />
      <Button title="Go to Text Input Screen" onPress={() => navigation.navigate('TextScreen')} />
      <Button title="Go to Password Validation Screen" onPress={() => navigation.navigate('PasswordValidation')} />
      <Button title="Go to Box Screen" onPress={() => navigation.navigate('Box')} />
      <Button title="Go to Box Screen Exercise" onPress={() => navigation.navigate('BoxExercise')} />
    </View>
  );
    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
