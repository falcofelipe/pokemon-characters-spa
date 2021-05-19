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

const contactReducer = (state, action) => {
	switch (action.type) {
		case GET_POKEMON:
			return {
				...state,
				pokemon: action.payload,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case POKEMON_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		/* FILTERING - Not Implemented */
		/*
            case SET_FILTER:
			return {
				...state,
				filter: action.payload,
			};
		case CLEAR_FILTER:
			return {
				...state,
				filter: '',
			};
        */
		default:
			return state;
	}
};

export default contactReducer;
