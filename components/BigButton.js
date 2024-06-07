import { TouchableOpacity, Pressable, Text, StyleSheet } from "react-native";
import React from 'react';

const BigButton = props => {
    const textToShow = props?.text || 'Default Text';

    return (
        <TouchableOpacity style={props.fill ? styles.buttonfill : styles.button}  onPress={() => props.onPress()}  >

            <Text style={props.fill ? styles.textfill : styles.text}>{props.text}</Text>


        </TouchableOpacity>





    );
}
const styles = StyleSheet.create({
    button: {
        width: 334,
        height: 57,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonfill: {
        width: 334,
        height: 57,
        borderRadius: 10,
        backgroundColor: 'black',



        alignItems: 'center',
        justifyContent: 'center',
    },
    textfill: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',

    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',


    },
});

export default BigButton;