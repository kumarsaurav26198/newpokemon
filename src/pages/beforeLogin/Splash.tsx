import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    navigation: any,
}


const Splash = ( props: Props  ) => {
    const { navigation } = props;
  
       setTimeout(() => {
        navigation.replace('LogIn');
    }, 3000);
  return (
   <ImageBackground source={require("../../assets/splash.png")} style={{height: "100%", width: "100%" }}/>
  )
}

export default Splash

const styles = StyleSheet.create({})