import { StyleSheet,  View, TextInput, Image } from 'react-native'
import React from 'react'

type Props = {}

const SearchInputBox = (props: Props) => {
  return (
    <View>
      <View style={styles.inputFieldContainer}>
        <Image
          style={styles.searcIcon}
          source={require('../assets/images/search.png')}
        />
        <TextInput
          placeholder="What Pokémon are you looking for? "
          style={styles.root}
          keyboardType="default"
        />
      </View>
    </View>
  )
}

export default SearchInputBox

const styles = StyleSheet.create({
  inputFieldContainer: {
    height: 48,
    backgroundColor: '#F2F2F2',
    marginHorizontal: 16,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 14,
    fontWeight: "500",
    width:"100%"
  },
  searcIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
    marginRight: 8,
  },

})