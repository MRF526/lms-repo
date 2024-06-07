import { TouchableOpacity, Pressable, Text, StyleSheet, View, Alert } from "react-native";
import {React,  useState, useEffect } from 'react';
import PrimaryText from "../components/PrimaryText";
import SecondaryText from "../components/SecondaryText";
import SmallButton from "../components/SmallButton";
import SkipgButton from "../components/SkipgButton";
import HeadingText from "../components/HeadingText";
import Textinput from "../components/Textinput";
import PasswordInput from "../components/PasswordInput";
import BigButton from "../components/BigButton";
import ResetPassword from "./ResetPassword";
import OnBoarding6 from "./OnBoarding6";
import SigUp from "./SignUp";
import HomeScree from "./HomeScree";
import BottomTabNavigator from "./BottomNav";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig";
const firebaseApp = initializeApp(firebaseConfig);
import AsyncStorage from "@react-native-async-storage/async-storage";
import Weather from "./Weather";

const Sigin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
      // Update the document title using the browser API
      retrieveData()
    },[]);
    

    const storeData = async (email, password) => {
        try {
            await AsyncStorage.setItem('@user_email', email);
            await AsyncStorage.setItem('@user_password', password);
        } catch (e) {
            alert(e);
        }
    };

    const retrieveData = async () => {
        try {
            const email = await AsyncStorage.getItem('@user_email');
            const password = await AsyncStorage.getItem('@user_password');
            setEmail(email)
            setPassword(password)


            if (email !== null && password !== null) {
                console.log(email);
                console.log(password);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const forgetpwd = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset link sent. Check your Email");
            }).catch((error) => {
                alert(error.message);
            });
    }

    const onpresssigin = async () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                storeData(email, password);  // Store data on successful sign-in
                props.navigation.navigate(BottomTabNavigator);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <HeadingText text={'Sign in'} />
            <View style={{ marginTop: 10 }}>
                <SecondaryText text={'Please Sign in with your account'} />
            </View>
            <View style={{ marginTop: 17 }}>
                <Textinput title={'Email Here'} text={'ex: abs@test.com'} value={email} onChangeText={(t) => setEmail(t)} />
            </View>
            <View>
                <PasswordInput title={'Password'} text={'***********'} value={password} setPassword={(t) => setPassword(t)} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Pressable onPress={() => forgetpwd()}>
                        <Text>Forget Password?</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ marginTop: 28, marginBottom: 10 }}>
                <BigButton text={'SIGN IN'} fill={true} onPress={() => onpresssigin()} />
            </View>
            <Text>------------------Or Sign in with-----------------</Text>
            <View style={{ marginTop: 28, marginBottom: 18 }}>
                <BigButton text={'Sign in with facebook'} fill={true} />
            </View>
            <View style={{ marginBottom: 18 }}>
                <BigButton text={'Sign in with google'} fill={false} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Didn’t have an account?  </Text>
                <Pressable onPress={() => props.navigation.navigate(SigUp)}>
                    <Text style={{ color: 'blue' }}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Sigin;
