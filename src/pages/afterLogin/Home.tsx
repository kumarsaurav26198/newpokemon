import { StyleSheet, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader';
import HomeCardContainer from '../../container/HomeCardContainer';


interface Props {
    navigation: any,
}

const Home = ( props: Props  ) => {
    const { navigation } = props;
  
  return (
    <>
    <View style={styles.homeContainer}>
        <HomeHeader />
        <HomeCardContainer navigation={navigation}/>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('../../assets/images/filter.png')} style ={styles.filterIcon} />
          </TouchableOpacity>
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create( {
  homeContainer: {
    height: "81%",
    width: "100%",
  },
  filter: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7076C9',
    position:"absolute",
    alignItems:'center',
    justifyContent: 'center',
    bottom: 20,
    zIndex: 3,
    left: "80%",
    top:"105%"
  },
  filterIcon: {
    width: 24,
    height: 24
  }
})