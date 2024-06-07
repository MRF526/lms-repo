import React, { useEffect, useRef, useState } from 'react';
import { Platform, View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Clipboard from 'expo-clipboard';
import { sendPushNotification } from '../components/PushNotificationService'; // Adjust the path as needed
import registerNNPushToken from 'native-notify';
import axios from 'axios';
import BigButton from '../components/BigButton';
import * as Location from 'expo-location';

import GetLocation from 'react-native-get-location';




Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Weather = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [WeatherData, setWeatherData] = useState(null);
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [LAT, SetLat] = useState('');
  const [LONG, SetLONG] = useState('');

  const notificationListener = useRef();
  const responseListener = useRef();



  const loadweatherdata = async () => {
    console.log("LAT: ", LAT)
    console.log("LONG:", LONG)
    await waitForCondition(() => LAT && LONG);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=811d7502ce35f7fc6badc51a218f575b`
    console.log("URL: ",url)
    let res = await axios.get(url)
    setWeatherData(res.data)
    console.log(WeatherData)
    console.log("sdafasd")
  }
  
  const waitForCondition = (conditionFn, checkInterval = 100) => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (conditionFn()) {
          clearInterval(interval);
          resolve();
        }
      }, checkInterval);
    });
  };
  

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("Location LAT: ",location.coords.latitude)
      console.log("Location Long: ",location.coords.longitude)
      SetLat(location.coords.latitude)
      SetLONG(location.coords.longitude)
      console.log('In UseEffect LAT: ',LAT)
      console.log('In UseEffect LONG:  ',LONG)

    loadweatherdata();

    })();
    
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) {
        setExpoPushToken(token);
        console.log("Token ID:", token);
        sendPushNotification(token); // Send a push notification using the token
      }
    }).catch(error => {
      console.error("Error getting push token:", error);
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(expoPushToken);
    Alert.alert('Push token copied to clipboard!');
  };
  async function scheduleNotification() {
    console.log('I am in schedule notification')
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Local Notification",
        body: "This is a local notification triggered from the app!",
        data: { data: 'goes here' },
      },
      trigger: { seconds: 5 }, // Notification will trigger after 5 seconds
    });
  }

  return (
    <View style={{ padding: 20,marginTop:35 }}>
      <Text>Let me tell you the weather</Text>
      {expoPushToken ? (
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 10 }}>Expo Push Token:</Text>
          <Text selectable>{expoPushToken}</Text>
          <TouchableOpacity onPress={copyToClipboard} style={{ marginTop: 10, backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white' }}>Copy to Clipboard</Text>
          </TouchableOpacity>
          <BigButton text={'Local Notification'} onPress={() => scheduleNotification()} />
        </View>
      ) : (
        <Text>Fetching Expo Push Token...</Text>
      )}
    </View>
  );
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    // Use Constants.expoConfig instead of Constants.manifest
    const projectId = Constants.expoConfig.projectId;
    console.log('Constants.expoConfig:', Constants.expoConfig);
    console.log('Constants.expoConfig.projectId:', projectId);

    token = (await Notifications.getExpoPushTokenAsync({
      projectId: projectId, // Using Constants.expoConfig.projectId
    })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
export default Weather;
