import { StyleSheet, View,  } from 'react-native'
import React from 'react'
import WishlistHeader from '../../components/WishlistHeader';
import SearchInputBox from '../../components/SearchInputBox';
import WishlistContainer from '../../container/WishlistContainer';

const Wishlist = ( ) => {

  
  return (
    <>
      <View style={{ height:"100%"}}>
      <WishlistHeader />
        <SearchInputBox />
        <WishlistContainer/>
      </View>
    </>
  )
}

export default Wishlist

const styles = StyleSheet.create({})