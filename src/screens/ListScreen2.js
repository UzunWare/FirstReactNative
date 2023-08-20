import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen2 = () => {
    const friends = [
        {name: "Friends 1", age: 20},
        {name: "Friends 2", age: 45},
        {name: "Friends 3", age: 32},
        {name: "Friends 4", age: 27},
        {name: "Friends 5", age: 53},
        {name: "Friends 6", age: 30},
    ];
    
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.listStyle}
            data={friends}
            keyExtractor={(friend) => friend.name}
            renderItem={({item}) => {
                return <Text style={styles.textStyles}>{item.name} - Age {item.age}</Text>
            }}
        />
        );
};

const styles = StyleSheet.create({
    textStyles: {
        marginVertical: 10
    },
    listStyle: {
        marginHorizontal: 25
    }
});

export default ListScreen2;