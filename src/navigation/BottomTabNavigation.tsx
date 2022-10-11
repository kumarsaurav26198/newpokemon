import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Home from '../pages/afterLogin/Home';
import Wishlist from '../pages/afterLogin/Wishlist';
import MyAccount from '../pages/afterLogin/MyAccount';

const Tab = createBottomTabNavigator()

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    backgroundColor: 'white',
                    height: 64,
                    paddingBottom: 10,
                    paddingTop: 11,
                   position: 'absolute',
                    bottom: 0,
                }
            }}
        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <Image
                        style={styles.bottomTabIcons}
                        source={require('../assets/images/homeActive.png')
                            } />
                    ) : (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../assets/images/home.png')
                            } />
                            );
                        },
                    }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../assets/images/wishlistActive.png')
                        } />
                    ) : (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../assets/images/wishlist.png')
                            } />
                    );
                },
            }} name="Wishlist" component={Wishlist} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../assets/images/myAccountActive.png')
                            } />
                    ) : (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../assets/images/myAccount.png')
                        } />
                        );
                    },
                }} name="MyAccount" component={MyAccount} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create( {
    bottomTabIcons: {
        width: 24,
        height: 24,
    },
});