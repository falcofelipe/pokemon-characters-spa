import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';
import {
	GET_POKEMON,
	SET_CURRENT,
	CLEAR_CURRENT,
	POKEMON_ERROR,
	/*
    SET_FILTER,
	CLEAR_FILTER,
    */
} from '../types';

// Custom hook to use the Pokemon Context with Context API
export const usePokemon = () => {
	const { state, dispatch } = useContext(PokemonContext);
	return [state, dispatch];
};

/*--------------- ACTIONS --------------------*/

// Get Pokemon from the API
export const getPokemon = async (dispatch) => {
	try {
		const res = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=386'
		);
		const pokemonArr = res.data.results;
		let pokemon = [];
		// Fetches the characteristics of each Pokemon stored in "pokemonArr" and sets it to "pokemon"
		for (const poke of pokemonArr) {
			const url = poke.url;
			const res = await axios.get(url);
			pokemon.push(res.data);
		}
		dispatch({ type: GET_POKEMON, payload: pokemon });
	} catch (err) {
		console.error(err);
		dispatch({ type: POKEMON_ERROR, payload: err.response.data.msg });
	}
};

// Set Current Pokemon
export const setCurrent = (dispatch, pokemon) => {
	dispatch({ type: SET_CURRENT, payload: pokemon });
};

// Clear Current Pokemon
export const clearCurrent = (dispatch) => {
	dispatch({ type: CLEAR_CURRENT });
};

/* FILTERING - NOT IMPLEMENTED */
/*
// Filter Pokemons
export const setFilter = (dispatch, text) => {
	dispatch({ type: SET_FILTER, payload: text });
};

// Clear Filter
export const clearFilter = (dispatch) => {
	dispatch({ type: CLEAR_FILTER });
};
*/

/*---------------- STATE -----------------*/

const PokemonState = (props) => {
	const initialState = {
		pokemon: null,
		current: null,
		filter: '',
		error: null,
	};

	const [state, dispatch] = useReducer(pokemonReducer, initialState);

	return (
		<PokemonContext.Provider
			value={{
				state: state,
				dispatch,
			}}>
			{props.children}
		</PokemonContext.Provider>
	);
};

export default PokemonState;
