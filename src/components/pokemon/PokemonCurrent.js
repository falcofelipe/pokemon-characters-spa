import React, { Fragment } from 'react';
import { usePokemon, clearCurrent } from '../../context/pokemon/PokemonState';
import formatString from '../../utils/formatString';

const PokemonCurrent = ({ pokemon }) => {
	const pokemonDispatch = usePokemon()[1];

	const {
		name,
		types,
		sprites,
		stats,
		abilities,
		weight,
		height,
		base_experience,
	} = pokemon;

	return (
		<Fragment>
			<button
				className='ml-auto d-block btn close-btn text-warning'
				onClick={() => clearCurrent(pokemonDispatch)}>
				X
			</button>
			<img
				src={sprites.other['official-artwork']['front_default']}
				width='200px'
				height='auto'
				alt='The website creator'
				className='m-auto d-block current-img'
			/>
			<h3 className='text-center mb-4 mt-4'>{formatString(name)}</h3>
			<dl>
				<dt>Weight:</dt>
				<dd>{weight / 10 + ' kg'}</dd>
				<dt>Height:</dt>
				<dd>{height * 10 + ' cm'}</dd>
				<dt>Base Experience:</dt>
				<dd>{base_experience}</dd>
			</dl>
			<h4 className='mt-4 mb-3'>Types</h4>
			<ul className='list-group list-group-horizontal flex-wrap'>
				{types.map((type) => (
					<li key={type.slot} className='list-group-item'>
						{formatString(type.type.name)}
					</li>
				))}
			</ul>
			<h4 className='mt-4 mb-3'>Abilities</h4>
			<ul className='list-group list-group-horizontal flex-wrap'>
				{abilities.map((ability) => (
					<li key={ability.slot} className='list-group-item'>
						{formatString(ability.ability.name)}
					</li>
				))}
			</ul>
			<h4 className='mt-4 mb-3'>Base Stats</h4>
			<ul className='list-unstyled'>
				{stats.map((stat, index) => (
					<li key={index}>
						<strong>{formatString(stat.stat.name) + ': '}</strong>
						{stat['base_stat']}
					</li>
				))}
			</ul>
		</Fragment>
	);
};

export default PokemonCurrent;
