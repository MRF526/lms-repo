import { TouchableOpacity, Pressable, Text, StyleSheet } from "react-native";
import React from 'react';

const SecondaryText = props => {
    const textToShow = props?.text || 'Default Text';

    return (
        <Text style={styles.text}>{textToShow} </Text>




    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SecondaryText;
