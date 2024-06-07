// OtherScreen.js
import React from 'react';
import { View, Text, StyleSheet,FlatList, } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../FirebaseConfig';
import { useState,useEffect } from 'react';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const OtherScreen = () => {
   
        const [emails, setEmails] = useState([]);
      
        const fetchUserEmails = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "Users"));
            const emailList = querySnapshot.docs.map(doc => doc.data().email);
            setEmails(emailList);
          } catch (e) {
            console.log("Error getting documents: ", e);
          }
        };
      
        useEffect(() => {
          fetchUserEmails();
        }, []);
      



    return (
        <View style={styles.container}>
      <Text style={styles.header}>User Emails</Text>
      <FlatList
        data={emails}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.email}>{item}</Text>}
      />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      email: {
        fontSize: 18,
        marginBottom: 10,
      },
});

export default OtherScreen;
