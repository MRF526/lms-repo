// BottomTabNavigator.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you use Expo, or install react-native-vector-icons otherwise

import HomeScree from './HomeScree'; // Adjust the import according to your file structure
import OtherScreen from './OtherScreen'; // Another example screen
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
    return (
        
        <Tab.Navigator AppbarHeader={false}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;


                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScree} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Settings" component={OtherScreen} options={{
                headerShown: false,
            }} />
            <Tab.Screen name="Notifications" component={OtherScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
       
    );
};

export default BottomTabNavigator;