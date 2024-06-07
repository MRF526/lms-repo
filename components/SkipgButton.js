import { TouchableOpacity, Pressable, Text, StyleSheet } from "react-native";
import React from 'react';

const SkipgButton = props => {
    const textToShow = props?.text || 'Default Text';

    return (
        <TouchableOpacity style={styles.button} onPress={() => props.onPress()}  >

            <Text style={styles.text}>{textToShow}</Text>


        </TouchableOpacity>





    );
}
const styles = StyleSheet.create({
    button: {
        width: 49,
        height: 21,
        borderRadius: 8,
        borderWidth: 1,


        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        //color: 'white',
        fontSize: 12,
        //fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default SkipgButton;