
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
//import Video from 'react-native-video';
import { Video } from 'expo-av'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OtherScreen from '../Screens/OtherScreen';
import CourseTabs from '../Screens/Course';
import { chaptersGD } from './CourseGDdata';
import T14B from './T14B';


const ChaptersDropDown = () => {
    const [activeChapter, setActiveChapter] = useState(null)
    const [activeTab, setActiveTab] = useState(null)

    const toggleChapter = (chapterId) => {
        console.log('ChapterNo IN Toggle', { chapterId })
        setActiveChapter(activeChapter === chapterId ? null : chapterId);
    };

    const renderchapters = ({ item }) => {
        //console.log(item); // Log to ensure item is received correctly
        return (
            <View>
                <View style={styles.chapterheading}>
                    <TouchableOpacity onPress={() => toggleChapter(item.id)}  >
                        <T14B text={item.title} />
                    </TouchableOpacity>
                </View>
                {activeChapter === item.id && (
                    <View style={styles.chapterToggle}>
                        


                        {item.lessons.map((lesson, index) => (

                            <Text key={index} style={styles.lesson}>{lesson}</Text>
                        ))}




                    </View>




                )}



            </View>


        );
    }

    return (
        <View style={{ margin: 15, }}>

                <FlatList
                    data={chaptersGD}
                    renderItem={renderchapters}
                    keyExtractor={(item) => item.id}







                />








            </View>


    )}

    const styles = StyleSheet.create({
        chapterheading: {
            width: '98%',
            height: 49,
            backgroundColor: '#d0dcf4',
            borderRadius: 10,
            padding: 8,
            //borderWidth:1,
            justifyContent: 'center',
            marginBottom: 12,
            //shadowColor
    
        },
        chapterToggle:{
            width: '98%',
           // height: 49,
            backgroundColor: '#d0dcf4',
            borderRadius: 10,
            padding: 8,
            //borderWidth:1,
            justifyContent: 'center',
            marginBottom: 12,
            //shadowColor
    
    
    
        },
        lesson: {
            marginTop: 3, marginBottom: 8,
        },
    





    })

    export default ChaptersDropDown;