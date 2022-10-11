import { ScrollView, StyleSheet, Text, View,Image ,ImageBackground} from 'react-native'
import React from 'react'
import TabHeading from '../../components/TabHeading';
import ProfileList from '../../components/ProfileList';

type Props = {}

const MyAccount = (props: Props) => {
  return (
      <>
          <View style={ {backgroundColor:"white", height:"100%"} }>
              
      <TabHeading title="Profile" />
      <ScrollView>
         <View style={styles.container}>
             <Image style={styles.image} source={require('../../assets/images/Account.png')} />
              <View style={styles.nameArea}>
              <Text style={styles.profilename}>Johnson markson</Text>
              <Text style={styles.locationText}>
               <Image style={styles.loactionlogo} source={require('../../assets/images/location1.png')} />
                Dalvin street
                </Text>
                </View>
        </View>
          <View style={styles.waferArea} >
             <ImageBackground source={require('../../assets/images/wafer.png')}>
                 <Text style={styles.offerText}>YOU HAVE ONLY 4 WISHLIST FOR NOW</Text>
              </ImageBackground>
        </View>
         <View style={styles.borderLine} />
                        <View>
                            <ProfileList title='Account' />
                            <ProfileList title='Notifications' />
                            <ProfileList title='Appearance' />
                            <ProfileList title='Privacy' />
                            <ProfileList title='Help & Support' />
                            <ProfileList title='About' />
                        </View>
      </ScrollView>
      
     </View>
    </>
  )
}

export default MyAccount

const styles = StyleSheet.create( {
     maincontainer: {
        flex: 1,
    },
    nameArea: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    locationText: {
        fontSize: 15,
        fontWeight: '700',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-around'
    },
    image: {
        flexDirection: "column",
        alignSelf: 'center',
        width: 70,
        height: 70,
    },
    waferArea: {
        margin: 10,
        marginTop: 30,
        borderRadius: 20,
        overflow: 'hidden'
    },
    profilename: {
        flexDirection: "column",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#1E3A4F',
        marginRight: 60,
    },
    loactionlogo: {
        width: 20,
        height: 20,
    },
    offerText: {
        color: '#070923',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 20,
        fontWeight: '800',
        letterSpacing: 2
    },
    borderLine: {
        marginTop: 20,
        borderBottomColor: '#3F4279',
        borderBottomWidth: 3,
        width: '93%',
        alignSelf: 'center'
    },
    labelArea: {
        height: 27,
        backgroundColor: '#FEC20C',
        borderRadius: 50,
        width: 140,
        bottom: 110,
        left: 140,
        flexDirection: 'column'
    },
    labelText: {
        margin: 5,
        fontSize: 12,
        alignSelf: 'center',
        color: 'white',
    },
})