import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions, } from 'react-native';
import Slides from './Slides';
import OnBoardingItems from './OnBoardingItems';


const OnBoarding = props => {



    return (
        <View style={styles.container}>
            <FlatList data={Slides} renderItem={({ item }) => <OnBoardingItems item={item} horizontal
                showHorizontalScrollIndecator />} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OnBoarding;