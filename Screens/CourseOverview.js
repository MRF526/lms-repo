// OverviewScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Overview Content</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OverviewScreen;
