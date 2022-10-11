import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { useGetPokemonsQuery } from "../services/pokemonApi";
import HomeCard from '../components/HomeCard';
import React, { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemonDummyData';

interface Props {
    navigation: any,
}

interface pokemons {
    id: string,
    name: string,
    type: string,
    attack: string,
    image: string;
}

const HomeCardContainer = ( props: Props ) => {
    const { navigation } = props;


  const { data } = useGetPokemonsQuery();
  const [ pokemons, setPokemons ] = useState( [] );
  
  useEffect( () => {
    let AllPokemons = getPokemons()
    return setPokemons(AllPokemons);
  } );


  function renderPokemon ( { item: pokemon } ) {
    return (
      <HomeCard { ...pokemon }
        onPress={ () => {
          navigation.navigate( 'Details', {
            pokemonId: pokemon.id,
          } );
        } }
      />
    );
  }


  return (
    <>
      <View style={ styles.container }>

        { data !== undefined && data !== null ?
          <FlatList
            showsVerticalScrollIndicator={ false }
            alwaysBounceVertical={ false }
            keyExtractor={(item) => item.id.toString()}
            data={ pokemons }
            numColumns={ 2 }
            renderItem={ renderPokemon }
          />
         : "" } 

      </View>
    </>
  );
};

export default HomeCardContainer;

const styles = StyleSheet.create( {
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    

  },
  card: {
    width: "49%",
    height: 143,
    borderRadius: 20,
    marginBottom: 8,
    marginRight: 8,
    paddingLeft: 14,
    paddingTop: 24,
  },
  typeWrapper: {
    width: 62,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF4D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  attackWrapper: {
    width: 69,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF4D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  cardBody: {
    flexDirection: 'row'
  },
  image: {
    width: 88,
    height: 80,
    marginTop: 10
  },
} );