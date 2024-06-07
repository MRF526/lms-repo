import { TouchableOpacity, Pressable, Text, StyleSheet } from "react-native";
import React from 'react';

const HeadingText = props => {
    const textToShow = props?.text || 'Default Text';

    return (
        <Text style={styles.text}>{textToShow} </Text>




    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',




    },
});

export default HeadingText;
