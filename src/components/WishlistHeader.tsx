import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react'

type Props = {}

const WishlistHeader = (props: Props) => {
    return (
      <View style={styles.container}>
            <ImageBackground source={ require( "../assets/images/Header.png" ) } style={ styles.ImageBackground }>
                <View style={{paddingTop:40,opacity: 1, paddingLeft:16}}>
                  <Text style={{fontWeight:"700", fontSize:26 ,color:"#35353A",marginBottom:20}}>Pokédex</Text>
                    <Text style={ { fontSize: 14, color: '#35353A', width: 360, letterSpacing: 0.5,fontWeight:"500" , } }>
                    Search for Pokémon by name or by using the National Pokédex number.
                    </Text>
                </View>
            </ImageBackground >
      </View>
  )
}

export default WishlistHeader

const styles = StyleSheet.create( {
    container: {
        height: 168,
        width: "100%",
    },
    ImageBackground:{
        height:168,
        width: "100%",
    }
})