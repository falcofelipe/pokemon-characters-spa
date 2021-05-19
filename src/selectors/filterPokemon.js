/* Code to implement and improve to filtering pokemon. Not implemented */

const filterPokemon = (pokemonArr, filter) => {
	const filteredPokemon = pokemonArr.filter((pokemon) => {
		const lcFilter = filter.toLowerCase();
		const name = pokemon.name ? pokemon.name.toLowerCase() : '';
		const type = pokemon.type ? pokemon.type.toLowerCase() : '';
		return name.includes(lcFilter) || type.includes(lcFilter);
	});
	return filteredPokemon;
};

export default filterPokemon;
