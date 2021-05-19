import React from 'react';
import { usePokemon, setCurrent } from '../../context/pokemon/PokemonState';
import formatString from '../../utils/formatString';

const PokemonItem = ({ pokemon }) => {
	const pokemonDispatch = usePokemon()[1];

	const { name, types, sprites } = pokemon;

	const onClick = () => {
		setCurrent(pokemonDispatch, pokemon);
	};

	return (
		<li className='pokemon-item list-group-item' onClick={onClick}>
			<div className='row'>
				<div className='pokemon-img text-center col-12 col-lg-3 col-md-4 col-sm-3'>
					<img
						src={sprites['front_default']}
						width='100'
						alt=''></img>
				</div>
				<div className='pokemon-details text-center text-md-left col-12 col-lg-9 col-md-8 col-sm-9'>
					<h5>{formatString(name)}</h5>
					<ul className='list-group list-group-horizontal flex-wrap justify-content-center justify-content-sm-start'>
						{types.map((type) => (
							<li key={type.slot} className='list-group-item'>
								{formatString(type.type.name)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
};

export default PokemonItem;
