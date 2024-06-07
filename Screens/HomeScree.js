// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, AsyncStorage } from 'react-native';
import { Courses } from '../components/Courses';
import { chips } from '../components/chips';
import PrimaryText from '../components/PrimaryText';
import { Ionicons } from 'react-native-vector-icons';
import CourseDetail from './CourseDetail';
import OtherScreen from './OtherScreen';
import SigUp from './Sigin';
import OnBoarding6 from './OnBoarding6';




const HomeScree = (props) => {
    //const [Courses,setCourses]=useState([]);
    const renderChip = ({ item }) => (
        <View style={styles.chip}>
            <Text style={styles.chipText}>{item.title}</Text>
        </View>
    );
    const getdata = async ()=>{
        const url = "http://10.0.2.2:3000/Courses";
        let result = await fetch(url)
        result = await result.json()
        setCourses(result)




    }
    useEffect(()=>{
        getdata()
        saveData()


    },[])
    const saveData = async () => {
        const data = {
            id:9,
            
            title: 'Mobile app development',
            author: 'Ahmad Sadiq',
            progress: 80,
            rating: 5,
            screen: 'CourseDetail'
        }
        const url = "http://10.0.2.2:3000/Courses";
        let result = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        result = result.json(),
        console.warn(result)

   }


    const renderCourse = ({ item }) => (


        <View style={[styles.courseCard,]}>
            <TouchableOpacity onPress={() => props.navigation.navigate(item.screen)}>
                <View style={styles.courseThumbnail}></View>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    {[...Array(5)].map((_, index) => (
                        <Ionicons
                            key={index}
                            name={index < item.rating ? 'star' : 'star-outline'}
                            size={12}
                            color="#FFD700"
                        />
                    ))}
                </View>
                <Text style={styles.courseAuthor}>By {item.author}</Text>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${item.progress}%` }]}></View>
                </View>
                <Text style={styles.courseProgress}>{item.progress}% Done</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <PrimaryText style={{ textAlign: 'left' }} text={'Welcome, Mr Rafi'} />

                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search Here"
                            />
                        </View>
                        <FlatList
                            data={chips}
                            renderItem={renderChip}
                            keyExtractor={item => item.id}
                            horizontal
                            contentContainerStyle={styles.chipsContainer}
                            showsHorizontalScrollIndicator={false}
                        />
                        <Text style={styles.continueWatchingText}>Continue Watching</Text>
                    </>
                )}
                data={Courses}
                renderItem={renderCourse}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.coursesGrid}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //marginTop:35,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        //margin: 20,
        marginBottom: 15,
    },
    searchContainer: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        padding: 10,
    },
    chipsContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    chip: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    chipText: {
        fontSize: 14,
    },
    continueWatchingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    coursesGrid: {
        paddingHorizontal: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    courseCard: {
        width: '48%',
        marginBottom: 20,
    },
    courseThumbnail: {
        width: '100%',
        height: 100,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginBottom: 10,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    courseAuthor: {
        fontSize: 14,
        color: '#888',
    },
    progressBarContainer: {
        height: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 5,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#3b82f6',
    },
    courseProgress: {
        fontSize: 14,
        color: '#888',
    },
});

export default HomeScree;
