import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetails2 = (props) => {
    return <View>
        <Image source={props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>Image score - {props.imgScore}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetails2;