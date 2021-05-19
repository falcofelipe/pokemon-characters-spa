import React, { Fragment, useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import PokemonItem from './PokemonItem';
import { usePokemon, getPokemon } from '../../context/pokemon/PokemonState';
// import filterPokemon from '../../selectors/filterPokemon';

const Pokemon = () => {
	const [pokemonState, pokemonDispatch] = usePokemon();
	const [page, setPage] = useState(1);

	const { pokemon } = pokemonState;

	useEffect(() => {
		getPokemon(pokemonDispatch);
	}, [pokemonDispatch]);

	let pokemonPaginated, maxPage;
	if (pokemon !== null) {
		pokemonPaginated = pokemon.slice((page - 1) * 10, page * 10);
		maxPage = Math.ceil(pokemon.length / 10);
	}

	/* Filter Pokemons - Not Implemented */
	/* 
    let filteredPokemon;

	if (pokemon !== null && !loading) {
		filteredPokemon = filterPokemon(Pokemon, filter);
	} else {
		filteredPokemon = pokemon;
	}
    */

	return pokemon !== null && pokemon[0] !== undefined ? (
		<Fragment>
			<div className='row align-items-center mb-2'>
				<div className='col-12 col-sm-6 text-center text-sm-left'>
					<p className='mb-2 mb-sm-0 w-100'>
						Showing{' '}
						<span className='text-primary'>
							{(page - 1) * 10 + 1}-{page * 10}
						</span>{' '}
						Pokemon
					</p>
				</div>
				<div className='col-12 col-sm-6 text-center text-sm-right'>
					{page > 1 && (
						<button
							className='btn btn-warning btn-pag'
							onClick={() => setPage(page - 1)}>
							Previous Page
						</button>
					)}
					{page < maxPage && (
						<button
							className='btn btn-success btn-pag'
							onClick={() => setPage(page + 1)}>
							Next Page
						</button>
					)}
				</div>
			</div>

			<ul className='pokemon-list list-group'>
				{pokemonPaginated.map((poke) => (
					<PokemonItem key={poke.id} pokemon={poke} />
				))}
			</ul>

			<div className='row align-items-center mt-2'>
				<div className='col-6'>
					<p className='mb-0'>
						Showing{' '}
						<span className='text-primary'>
							{(page - 1) * 10 + 1}-{page * 10}
						</span>{' '}
						Pokemon
					</p>
				</div>
				<div className='col-6 text-right'>
					{page > 1 && (
						<button
							className='btn btn-warning'
							onClick={() => setPage(page - 1)}>
							Previous Page
						</button>
					)}
					{page < maxPage && (
						<button
							className='btn btn-success'
							onClick={() => setPage(page + 1)}>
							Next Page
						</button>
					)}
				</div>
			</div>
		</Fragment>
	) : (
		<Spinner />
	);
};

export default Pokemon;
