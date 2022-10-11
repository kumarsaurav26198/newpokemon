import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopTabNavigation from '../.././navigation/TopTabNavigation';
import { addItemToWishlist } from '../../redux/action/wishlist';
import { getPokemon } from '../../services/pokemonDummyData';
import { useDispatch } from 'react-redux';
import { addTOWishlist } from "../../redux/wishlistSclice";
import BottomTabNavigation from '../../navigation/BottomTabNavigation';

interface pokemon {
    id: string,
    name: string,
    type?: string,
    attack?: string,
    image: string;
}

interface Props {
    navigation: any,
    route: any;
}

const Details = ( props: Props ) => {
    const { navigation, route } = props;
    const { pokemonId } = route.params;
    const dispatch=useDispatch()


    const [ pokemon, setPokemon ] = useState<pokemon | undefined>();

    useEffect( () => {
        let selectedPokemon = getPokemon( pokemonId );
        return setPokemon(selectedPokemon);
    } );


    const onAddToWishlist = (pokemon:any) => {
        dispatch(addTOWishlist(pokemon))
    };

    return (
        <>
            <View style={ styles.container }>
                <View style={ styles.detailTop }>
                    <View>
                        <View style={ styles.headerButtons }>
                            <TouchableOpacity onPress={ () => { navigation.navigate( 'Home' ); } }>
                                <Image style={ styles.backButton } source={ require( '../../assets/images/backWhite.png' ) } />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> onAddToWishlist(pokemon) }>
                                <Image style={ styles.backButton } source={ require( '../../assets/images/whiteHeart.png' ) } />
                            </TouchableOpacity>
                        </View>
                        <View style={ styles.headerButtons }>
                                <Text style={ { color: 'white', fontWeight: '500', fontSize: 28 } }>
                                    { pokemon?.name }</Text>
                                <Text style={ { color: 'white', fontWeight: '700', fontSize: 18 } }>{`${"#00"}`+pokemon?.id  }</Text>
                        </View>

                        <View style={ styles.headerButtons }>
                            <View style={ { flexDirection: 'row' } }>

                                { pokemon?.type ?
                                <View style={ styles.typeWrapper }>
                                    <Text style={ { color: 'white' } }>{pokemon?.type}</Text>
                                </View>
                                    : "" }
                                { pokemon?.attack ?
                                <View style={ styles.attackWrapper }>
                                    <Text style={ { color: 'white' } }>{pokemon?.attack}</Text>
                                </View>
                                    : "" }
                            </View>
                            <View>
                                <Text style={ { color: 'white', fontWeight: '500', fontSize: 16 } }>{"Seed Pokemon"}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={ styles.imageWrapper }>
                        <View style={ styles.imageBackground }>

                        </View>
                    </View>
                </View>
                <View style={ styles.detailWrapper }>
                    <TopTabNavigation />
                </View>
                <Image style={ styles.image } source={ pokemon?.image } />
            </View>
        </>
    );
};

export default Details;

const styles = StyleSheet.create( {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#71CEB1',
        paddingTop: 20,
    },
    typeWrapper: {
        width: 62,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    attackWrapper: {
        width: 69,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailTop: {
        flex: 0.50
    },
    detailWrapper: {
        width: '100%',
        paddingTop: 45,
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        flex: 0.50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'relative'
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 20
    },
    backButton: {
        height: 24,
        width: 24,
    },
    imageBackground: {
        height: 220,
        width: 220,
        borderRadius: 110,
        backgroundColor: '#A5EDD4'
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    image: {
        width: 223,
        height: 223,
        zIndex: 1,
        position: 'absolute',
        left: 85,
        top: 235
    },

} );