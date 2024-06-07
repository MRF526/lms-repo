// HomeScreen.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Courses } from '../components/Courses';
import { chips } from '../components/chips';
import PrimaryText from '../components/PrimaryText';


const HomeScreen = () => {
    const renderCourse = ({ item }) => (
        <View style={{ width: '48%', paddingVertical: 20, borderColor: 'black', borderWidth: 1, }}>
            <Text>fasghgf</Text>
            <View style={styles.courseThumbnail}></View>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseAuthor}>By {item.author}</Text>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${item.progress}%` }]}></View>
            </View>
            <Text style={styles.courseProgress}>{item.progress}% Done</Text>



        </View>




    )
    return (
        <SafeAreaView style={styles.container}>
            <Text>fadsfasf</Text>
            <FlatList






                data={Courses}
                renderItem={renderCourse}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ paddingHorizontal: 20 }}


            />


        </SafeAreaView>




    )



}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        marginTop: 38,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        padding: 10,
    },
});
export default HomeScreen;