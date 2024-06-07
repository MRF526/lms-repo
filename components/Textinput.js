import { TouchableOpacity, Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import React from 'react';

const Textinput = props => {
    const textToShow = props?.text || 'Default Text';

    return (

        <View >
            <Text style={styles.text}>{props.title}</Text>


            <TextInput style={styles.textinputcontainer} value={props.value} placeholder={textToShow} onChangeText={(t) => props.onChangeText(t)} />







        </View >





    );
}
const styles = StyleSheet.create({
    textinputcontainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#545464',
        width: 336,

        padding: 8,
        fontSize: 16,
        //color: '#E747CD',
    },
    text: {
        //color: 'white',
        fontSize: 16,
        textTransform: 'capitalize',
        padding: 6,
    },
});

export default Textinput;