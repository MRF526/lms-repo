import { TouchableOpacity, Pressable, Text, StyleSheet, View } from "react-native";
import React, { useState } from 'react';
import PrimaryText from "../components/PrimaryText";
import SecondaryText from "../components/SecondaryText";
import SmallButton from "../components/SmallButton";
import SkipgButton from "../components/SkipgButton";
import HeadingText from "../components/HeadingText";
import Textinput from "../components/Textinput";
import PasswordInput from "../components/PasswordInput";
import BigButton from "../components/BigButton";
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig";
const firebaseApp = initializeApp(firebaseConfig);





const ResetPassword = () => {
    let [newPassword,setPassword]=useState()

  
    const updatePwd = () => {
        const auth = getAuth(firebaseApp);
        const user = auth.currentUser;
        const email =auth.email;
        const password=auth.password;

        // Re-authenticate the user
        const credential = EmailAuthProvider.credential(email, password);
        reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
            updatePassword(user, newPassword).then(() => {
                alert("Password updated successfully");
            }).catch((error) => {
                alert(error.message);
            });
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <HeadingText text={'Reset Password'} />
            <View style={{ marginTop: 10, }}>
                <SecondaryText text={'At least 9 characters with uppercase and lowercase letters'} />


            </View>

            <View style={{ marginTop: 17, }}>

            </View>
            <View >
                <PasswordInput title={' New Password'} text={'***********'} setPassword={(t)=>setPassword(t)}/>
                <PasswordInput title={'Confirm Password'} text={'***********'} setPassword={(t)=>setPassword(t)}/>
            </View>
            <View style={{ marginTop: 28, marginBottom: 10 }}>
                <BigButton text={'DONE'} fill={true} onPress={updatePwd()} />

            </View>







        </View >





    );
}
const styles = StyleSheet.create({




});

export default ResetPassword;