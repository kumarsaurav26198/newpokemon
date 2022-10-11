import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>HP</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.45} minimumValue={0} maximumValue={1} minimumTrackTintColor="red" />
            </View>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>Attack</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.60} minimumValue={0} maximumValue={1} />
            </View>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>Defense</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.48} minimumValue={0} maximumValue={1} minimumTrackTintColor="red" />
            </View>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>Sp.Atk</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.65} minimumValue={0} maximumValue={1} />
            </View>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>Sp.Def</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.65} minimumValue={0} maximumValue={1} />
            </View>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>Speed</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.45} minimumValue={0} maximumValue={1} minimumTrackTintColor="red" />
            </View>
            <View style={styles.statsRow}>
                <Text style={{width:105, fontSize: 16}}>Total</Text>
                <Text style={{width: 25, fontSize:16, fontWeight: '600'}}>60</Text>
                <Slider style={{width: 250,}} value={0.317} minimumValue={0} maximumValue={1} />
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    statsRow: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems:'center',
    }
})