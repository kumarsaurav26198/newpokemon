import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    title: string,
}

const TabHeading = ( props: Props ) => {
    const {  title }=props
    
  return (
    <>
       <View style={styles.field}>
            <Text style={styles.Text}>{title}</Text>
        </View>
    </>
  )
}

export default TabHeading

const styles = StyleSheet.create( {
     field: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    Text: {
        color: '#1E3A4F',
        fontWeight: "800",
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 20,
        alignSelf: "center",
    },
})