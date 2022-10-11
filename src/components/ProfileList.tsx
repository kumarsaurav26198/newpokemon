import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface Props {
    title: string,
}


const ProfileList = ( props: Props ) => {
    const { title } = props;
    return (
        <>
            <View >
                <View style={ styles.wrapper }>
                    <TouchableOpacity>
                        <Text style={ styles.title }>{ title }</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Image style={ styles.vector } source={ require( "../assets/images/Vector.png" ) } />
                    </TouchableOpacity> */}
                </View>
                <View style={ styles.borderLine } />
            </View>
        </>
    );
};

export default ProfileList;

const styles = StyleSheet.create( {
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#1E3A4F',
        marginTop: 20,
        marginLeft: 15,
        fontSize: 17,
        fontWeight: "500",
    },
    borderLine: {
        marginTop: 20,
        borderBottomColor: '#FF5B87',
        borderBottomWidth: 1,
        opacity: 0.3,
        width: '93%',
        alignSelf: 'center'
    },
    vector: {
        flexDirection: 'column',
        marginRight: 20,
        height: 20,
        width: 11,
        marginTop: 20
    }
} );