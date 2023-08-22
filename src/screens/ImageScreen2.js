import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageDetail2 from '../components/ImageDetails2';

const ImageScreen2 = () => {
    return <View>
        <ImageDetail2 title="Forest" imgScore="9" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail2 title="Beach" imgScore="7" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail2 title="Mountain" imgScore="4" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen2;