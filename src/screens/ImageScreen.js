import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetails';


const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Beach" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
}
const styles = StyleSheet.create({});

export default ImageScreen;