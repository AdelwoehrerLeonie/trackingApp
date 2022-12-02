/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { GettingStarted } from "./screens/GettingStarted";
import { Profile } from "./screens/Profile";
import {ContactsList} from "./screens/ContactsList";
import { Routes } from "./screens/Routes"
import { AddContacts } from "./screens/AddContacts"
import { TrackingMap } from "./screens/TrackingMap";
import { SendLocation } from "./screens/SendLocation";
import { SendRoute } from './screens/SendRoutes';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GettingStarted" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GettingStarted" component={GettingStarted} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name="ContactsList" component={ContactsList} />
                <Stack.Screen name='Routes' component={Routes} />
                <Stack.Screen name='AddContacts' component={AddContacts} />
                <Stack.Screen name='TrackingMap' component={TrackingMap} />
                <Stack.Screen name='SendLocation' component={SendLocation} />
                <Stack.Screen name='SendRoute' component={SendRoute} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;