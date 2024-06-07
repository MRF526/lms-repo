// App.js
import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import BottomTabNavigator from './Screens/BottomNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding6 from './Screens/OnBoarding6';
import Sigin from './Screens/Sigin';
import SigUp from './Screens/SignUp';
import ResetPassword from './Screens/ResetPassword';
import InboxScreen from './Screens/InboxScreen';

import CourseTabs from './Screens/Course';
import MyWebView from './Screens/WebView';
import CourseDetail from './Screens/CourseDetail';
import { StyleSheet, View } from 'react-native';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import CreditCardPaymentScreen from './Screens/CardPayment';
//import InboxScreen from './Screens/InboxScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScree from './Screens/HomeScree';
import app from './firebase1';
import Weather from './Screens/Weather';
import registerNNPushToken from 'native-notify';


const Stack = createNativeStackNavigator();















const App = () => {
  registerNNPushToken(21711, 'wgH1OJOF5GalV2AuURagbF');
  return (


    <NavigationContainer >

      <Stack.Navigator>
      
      <Stack.Screen name="OnBoarding6" component={OnBoarding6} options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Weather" component={Weather} options={{
          headerShown: false,
        }} />
      <Stack.Screen name="InboxScreen" component={InboxScreen} options={{
          headerShown: false,
        }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} options={{
          headerShown: false,
        }} />
      <Stack.Screen name="HomeScree" component={HomeScree} options={{
          headerShown: false,
        }} />
     
      <Stack.Screen name="CreditCardPaymentScreen" component={CreditCardPaymentScreen} options={{
          headerShown: false,
        }} />
      <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} options={{
          headerShown: false,
        }} />
      







       
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{
          headerShown: false,
        }} />


        <Stack.Screen name="Sigin" component={Sigin} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SigUp" component={SigUp} options={{
          headerShown: false,
        }} />


        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
          headerShown: false,
        }} />





      </Stack.Navigator>


    </NavigationContainer>





  );
};
styles = StyleSheet.create({









}
)


export default App;
