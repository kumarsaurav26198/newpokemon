import { StyleSheet, Text, View,Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const HomeHeader = () => {
    return (
        <>
            <View style={ styles.container }>
                <View style={styles.leftContainer}>
                     <TouchableOpacity>
                        <Image style={ styles.backButton } source={ require( '../assets/images/backButton.png' ) } />
                      </TouchableOpacity>
                     <Text style={styles.headerText}>Pokedex</Text>
                </View>
                <View style={styles.rightContainer}>
                    <ImageBackground source={ require( "../assets/images/eclipse.png" ) } style={ styles.ImageBackground }>
                           <TouchableOpacity>
                             <Image style={styles.hamBurgerIcon} source={require('../assets/images/hamBurger.png')} />
                           </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        </>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftContainer: {
        marginTop: 35,
        paddingLeft:16
    },
    rightContainer: {
        position:"absolute",
        width: "50%",
        left: "50%",
    },
    backButton: {
        height: 24,
        width: 24,
        marginBottom:10
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'left',
        color: '#35353A',
        marginBottom:10
    },
    ImageBackground: {
                height:137,

        width: "100%",
      position:"absolute",
        marginStart: 70,
    },
    hamBurgerIcon: {
        height: 25,
        width: 25,
        position: "relative",
        top: "190%",
        left:90
    }
})