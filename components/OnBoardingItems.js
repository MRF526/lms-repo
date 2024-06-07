import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions } from 'react-native';
import Slides from './Slides';
import PrimaryText from './PrimaryText';
import SecondaryText from './SecondaryText';


const OnBoardingItems = props => {

    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <View style={styles.Image}>
                <Image source={item.image} style={[{ width, resizeMode: 'contain' }]} />


            </View>
            <View >
                <PrimaryText Text={item.title} />
                <SecondaryText Text={item.description} />
            </View>




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
    Image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 325,
        height: 325,
        borderRadius: 50,

    },
    BelowImage: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        width: '89%',

        borderRadius: 50,

    },
});

export default OnBoardingItems;