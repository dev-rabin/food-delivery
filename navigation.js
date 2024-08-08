// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer independent={true} s>
            <Stack.Navigator screenOptions={{
                headerShown : false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
                <Stack.Screen name="CartScreen" options={{presentation : "modal"}} component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
