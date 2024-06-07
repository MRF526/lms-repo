import { TouchableOpacity, Pressable, Text, StyleSheet } from "react-native";
import React from 'react';

const MedButton = props => {
    const textToShow = props?.text || 'Default Text';

    return (
        <TouchableOpacity style={props.fill ? styles.buttonfill : styles.button} onPress={() => props.onPress()}  >

            <Text style={props.fill ? styles.textfill : styles.text}>{textToShow}</Text>


        </TouchableOpacity>





    );
}
const styles = StyleSheet.create({
    button: {
        width: 221,
        height: 57,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,


        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonfill: {
        width: 221,
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

    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',

    },
});

export default MedButton;