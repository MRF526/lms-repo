import { TouchableOpacity, Pressable, Text, StyleSheet, TextInput, View, Alert } from "react-native";
import React, { useState } from 'react';
import PrimaryText from "../components/PrimaryText";
import SecondaryText from "../components/SecondaryText";
import SmallButton from "../components/SmallButton";
import SkipgButton from "../components/SkipgButton";
import HeadingText from "../components/HeadingText";
import Textinput from "../components/Textinput";
import PasswordInput from "../components/PasswordInput";
import BigButton from "../components/BigButton";
import Sigin from "./Sigin";
import ResetPassword from "./ResetPassword";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc,doc } from "firebase/firestore";
import app from "../firebase1";
import firebaseConfig from "../FirebaseConfig";


const db = getFirestore(app);

const SigUp =  (props) => {
    
    const [email, setemail]=useState()
    const [password, setpassword]=useState()
    const [confirmPassword, setconfirmPassword]=useState()
    const [name, setname]=useState()
    

    const onsignupPressed = async () => {
        var dotcom= email.substr(email.length - 4);
        if ( email==''|| dotcom!=='.com') {
            alert("Email Should include .com")
            
            return;
        }
        if (password !== confirmPassword || email=='') {
            alert("Password Do not match")
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        
        const auth = getAuth();
        
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert('User Created');
            console.log("User created with ID:", user.uid);

            // Create Firestore document with the correct UID
            const docRef = await setDoc(doc(db, "Users", user.uid), {
                email,
                name,
                password
            });
            console.log("Document written with ID: ", user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

            

    }


    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <HeadingText text={'Sign Up'} />
            <View style={{ marginTop: 10, }}>
                <SecondaryText text={'Create an account to begin your Learning Journey'} />


            </View>

            <View style={{ marginTop: 17, }}>
                <Textinput title={'Name'} text={'ex: Rafi'} onChangeText={(t)=>setname(t)} />
                <Textinput title={'Email Here'} text={'ex: abs@test.com'} onChangeText={(t)=>setemail(t)}/>


            </View>
            <View >
                <PasswordInput title={'Password'} text={'***********'} setPassword={(t)=>setpassword(t)}/>
                <PasswordInput title={'Confirm Password'} text={'***********'}  setPassword={(t)=>setconfirmPassword(t)}/>
            </View>
            <View style={{ marginTop: 28, marginBottom: 10 }}>
                <BigButton text={'SIGN UP'} fill={true} onPress={() => onsignupPressed()} />

            </View>
            {/* <Text>------------------Or Sign up with-----------------</Text>
            <View style={{ marginTop: 28, marginBottom: 18 }}>
                <BigButton text={'Sign Up with facebook'} fill={true} />

            </View>
            <View style={{ marginBottom: 18 }}>
                <BigButton text={'Sign Up with google'} fill={false} />
            </View> */}

            <View style={{ flexDirection: 'row' }}>
                <Text>Already have an account?  </Text>
                <Pressable onPress={() => props.navigation.navigate(Sigin)}  >
                    <Text style={{ color: 'blue' }}>Sign in</Text>
                </Pressable>

            </View>







        </View >





    );
}
const styles = StyleSheet.create({




});

export default SigUp;