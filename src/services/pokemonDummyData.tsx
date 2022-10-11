const POKEMONS = [
    {
      id: '1',
      name: 'bulbasaur',
      // type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bigBulbasaur.png")
    },
    {
      id: '2',
      name: 'ivysaur',
      type: 'Grass',
      // attack: 'Poison',
      image: require("../assets/images/Ivysaur.png")
    },
    {
      id: '3',
      name: 'venusaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/Venusaur.png")
    },
    {
      id: '4',
      name: 'charmeleon',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/Charmander.png")
    },
    {
      id: '5',
      name: 'charizard',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/Charizard.png")
    },
    {
      id: '6',
      name: 'squirtle',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bigBulbasaur.png")
    },
    {
      id: '7',
      name: 'wartortle',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/Wartortle.png")
    },
    {
      id: '8',
      name: 'blastoise',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '9',
      name: 'caterpie',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '10',
      name: 'metapod',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '11',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '12',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '13',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '14',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '15',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '16',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '17',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '18',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '19',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
    {
      id: '20',
      name: 'Bulbasaur',
      type: 'Grass',
      attack: 'Poison',
      image: require("../assets/images/bulbasaur.png")
    },
];

export function getPokemons() {
    return POKEMONS;
}

export function getPokemon(id:string) {
    return POKEMONS.find((pokemon) => (pokemon.id == id));
  
}

