import React, { useEffect,useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { getDoc, getFirestore, doc } from "firebase/firestore";
import firebaseConfig from '../FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  
  const getUserData = async (userId) => {
    //userId='JOcxoJ8LtsN4B2pkFVBy'
    try {
      const docRef = doc(db, "Users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserData(docSnap.data());
        console.log("Documentfjask f:", docSnap.data().name);

      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.log("Error getting document:", e);
    }
  };




  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed");
      if (user) {
        console.log("User ID from onAuthStateChanged:", user.uid);
        console.log("Full User Object:", user);  // Log the full user object
        getUserData(user.uid);
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: 'https://via.placeholder.com/100' }} />
        </View>
        <Text style={styles.tagline}>Tag Line</Text>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{userData.name}</Text>
          
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.sectionContent}>
            Lorem ipsum dolor sit amet consectetur. Nec eget accumsan molestie proin. Integer rhoncus vitae nisi natoque ac mus tellus scelerisque gravida.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Skills</Text>
          {/* Add skills content here */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop:50,
  },
  avatarContainer: {
    marginBottom: 10,
    //borderWidth:1,
    marginTop:-70,
    
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  tagline: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    
  },
  editButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProfileScreen;
