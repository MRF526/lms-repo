// CourseTabs.js
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OtherScreen from './OtherScreen';

const Tab = createMaterialTopTabNavigator();

const CourseTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Overview" component={OtherScreen} />
            <Tab.Screen name="Lessons" component={OtherScreen} />
            <Tab.Screen name="Reviews" component={OtherScreen} />
        </Tab.Navigator>
    );
};

export default CourseTabs;
