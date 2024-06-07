import React from 'react';
import { Text, StyleSheet } from "react-native";


const T14B = (props) => {
    const textToShow = props?.text || 'Default Text';

    return (
        <Text style={{ ...styles.text, ...props.style }}>{textToShow} </Text>




    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        //alignSelf: 'center',
        
        //textAlign: 'center',


        //alignContent: 'center',




    },
});

export default T14B;
