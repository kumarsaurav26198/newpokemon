import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../pages/beforeLogin/LogIn';
import Splash from '../pages/beforeLogin/Splash';
import SignUp from '../pages/beforeLogin/SignUp';
import BottomTabNavigation from './BottomTabNavigation';
import Details from '../pages/afterLogin/Details';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const SignedInStack = () => {
    return (
        <>
                <NavigationContainer>
                <Stack.Navigator initialRouteName="BottomTabs">
                     <Stack.Screen name="BottomTabs" component={BottomTabNavigation} options={{ headerShown: false }} />
                     <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        </>
    );
};

export const SignedOutStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    headerStyle: {
        backgroundColor: '#f4511e',
    },
});