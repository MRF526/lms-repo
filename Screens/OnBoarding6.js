import { TouchableOpacity, Pressable, Text, StyleSheet, View } from "react-native";
import React from 'react';
import PrimaryText from "../components/PrimaryText";
import SecondaryText from "../components/SecondaryText";
import SmallButton from "../components/SmallButton";
import SkipgButton from "../components/SkipgButton";
import Sigin from "./Sigin";
import SigUp from "./SignUp";
import BottomTabNavigator from "./BottomNav";
import Weather from "./Weather";



const OnBoarding6 = (props) => {


    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 10, flexDirection: 'row', marginRight: 10, marginTop: 40, justifyContent: 'flex-end' }}>
                <SkipgButton text={'skip'} fill={true} onPress={() => props.navigation.navigate(Weather)} />



            </View>
            <View style={{ flex: 45, }}>


            </View>
            <View style={{ flex: 45, alignItems: 'center', }}>
                <PrimaryText text={'JoiN IT Group to Kick Start Your Lesson'} />
                <View style={{ marginTop: 15, }}>
                    <SecondaryText text={'Join and Learn from our Top Instructors!'} />
                </View>
                <View style={{ marginTop: 23, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <SmallButton text={'Sign In'} fill={true} onPress={() => props.navigation.navigate(Sigin)} />
                    <View style={{ marginLeft: 7 }}>
                        <SmallButton text={'Sign Up'} fill={false} onPress={() => props.navigation.navigate(SigUp)} />


                    </View>


                </View>




            </View>




        </View >





    );
}
const styles = StyleSheet.create({




});

export default OnBoarding6;