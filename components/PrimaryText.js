import React from 'react';
import { Text, StyleSheet } from "react-native";


const PrimaryText = (props) => {
    const textToShow = props?.text || 'Default Text';

    return (
        <Text style={{ ...styles.text, ...props.style }}>{textToShow} </Text>




    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        //alignSelf: 'center',
        textAlign: 'center',


        alignContent: 'center',




    },
});

export default PrimaryText;
