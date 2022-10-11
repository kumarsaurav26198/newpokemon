import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../models/pokemon.model';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20' }),
  //  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/tutorials/' }),

  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], void>({
      query: () => `pokemon`,
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: (id) => `pokemon/${id}`,
    }),
  } ),
  
})

export const { useGetPokemonQuery ,useGetPokemonsQuery } = pokemonApi;