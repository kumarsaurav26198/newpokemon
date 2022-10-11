import { StyleSheet, Text, View, FlatList, } from 'react-native'
import WishlistCard from '../components/WishlistCard';
import { getPokemons } from '../services/pokemonDummyData';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const WishlistContainer = () => {

  const WishlistData=  useSelector(state => state.wishlistReducers.wishlistItems);

  // const [ pokemons, setPokemons ] = useState( [] );
  // useEffect( () => {
  //   const Data = getPokemons()
  //   return setPokemons(Data);
  // } );

  function renderItem ( { item: pokemon } ) {
    return (
      <>
       
          <WishlistCard { ...pokemon } />
      </>
    );
  };

  return (
    <View style={ styles.container }>
       { WishlistData ? 
      <FlatList
      showsVerticalScrollIndicator={ false }
      data={WishlistData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      : "" }
  </View>
  )
}

export default WishlistContainer

const styles = StyleSheet.create( {
 container: {
    paddingTop:10,
    paddingHorizontal: 16,
    // marginBottom:216
  },
 
})