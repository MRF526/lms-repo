
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
//import Video from 'react-native-video';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OtherScreen from './OtherScreen';
import CourseTabs from './Course';
import { chaptersGD } from '../components/CourseGDdata';
import T14B from '../components/T14B';
import ChaptersDropDown from '../components/ChaptersDropDown';
import BigButton from '../components/BigButton';
import CourseReviews from './CourseReviews';
import PaymentMethodScreen from './PaymentMethodScreen';




const Tab = createMaterialTopTabNavigator();

const CourseDetail = (props) => {
    const [activeChapter, setActiveChapter] = useState(null)
    let [activeTab, setActiveTab] = useState('O')

    // const activeTabScreen=()=>{
        
        

    // }

    // const toggleChapter = (chapterId) => {
    //     console.log('ChapterNo IN Toggle', { chapterId })
    //     setActiveChapter(activeChapter === chapterId ? null : chapterId);
    // };

    

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.videocontainer}>
                <Image
                    source={require('../assets/images/play.png')}
                    style={{ width: 64, height: 64 }}
                />


            </View>
            <View style={[styles.middletab, { marginBottom: 10 }]} >
                <TouchableOpacity onPress={()=>setActiveTab('O')}>
                    <Text style={activeTab==='O'? styles.tabtextfill:styles.tabtext}> Overview </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setActiveTab('L')} >
                    <Text style={activeTab==='L'? styles.tabtextfill:styles.tabtext}> Lessons </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setActiveTab('R')} >
                    <Text style={activeTab==='R'? styles.tabtextfill:styles.tabtext}> Reviews </Text>
                </TouchableOpacity>


            </View>
            <View style={{paddingBottom:350}}>

                {activeTab==='L'&& <ChaptersDropDown/>}
                {activeTab==='O'&& <OtherScreen/>}
                {activeTab==='R'&& <CourseReviews/>}
           



            </View>

            
            
           

           
            
            <View style={styles.buttonContainer}>
                <BigButton text={'Get Enroll'} fill={true} onPress={()=>props.navigation.navigate(PaymentMethodScreen)}/>
                




            </View>






        </SafeAreaView>









    )

}
const styles = StyleSheet.create({
    tabtext:{

        fontSize:16,
        fontWeight:'700',




    },
    tabtextfill:{

        fontSize:23,
        fontWeight:'700',
        backgroundColor:'black',
        color:'white',
        



    },
    videocontainer: {
        width: 'auto',
        height: 200,
        backgroundColor: 'rgb(196, 196, 196)',
        justifyContent: 'center',
        //alignContent: 'center',
        alignItems: 'center',
        marginTop: 35,

    },
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
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
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

    text: {



    },


    middletab: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        //borderWidth:1,
        borderBottomWidth: 2

    }









})













export default CourseDetail;