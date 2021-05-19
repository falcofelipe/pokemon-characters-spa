import React, { Fragment } from 'react';
import profilePicture from '../../assets/img/profile.jpg';
import Pokemon from '../pokemon/Pokemon';
import PokemonCurrent from '../pokemon/PokemonCurrent';
import { usePokemon } from '../../context/pokemon/PokemonState';

const Home = () => {
	const pokemonState = usePokemon()[0];

	const { current } = pokemonState;

	return (
		<Fragment>
			<div className='my-5 card'>
				<div className='row'>
					<div className='col-md-4 col-12 pl-5 pr-5 pr-md-0 py-4'>
						{current === null ? (
							<div className='personal-details pt-5'>
								<img
									src={profilePicture}
									width='200px'
									height='auto'
									alt='The website creator'
									className='m-auto d-block current-img'
								/>
								<h3 className='text-center mb-4 mt-4'>
									Felipe Falco
								</h3>
								<p>
									Hello, I'm the creator of this website! I'm
									a full stack web developer that specializes
									in building web applications using React,
									Node.js, Express.js, MongoDB and Bootstrap
								</p>
								<p>
									I also happen to be quite a fan of Pokemon,
									specially the first three generations, which
									is one of the reasons why only these
									generations are shown in this application.
									My favorite type of Pokemon is Ghost, but my
									favorite pokemon is Kabutops!
								</p>
								<h4 className='mt-4 mb-3'>More About Me</h4>
								<dl>
									<dt>Age:</dt>
									<dd>23</dd>
									<dt>Phone:</dt>
									<dd>
										<a href='tel:+526647426512'>
											+52 664-742-6512
										</a>
									</dd>
									<dt>Email:</dt>
									<dd>
										<a href='mailto:falco.felipe27@gmail.com'>
											falco.felipe27@gmail.com
										</a>
									</dd>
									<dt>City:</dt>
									<dd>Tijuana, BC, México</dd>
								</dl>
								<div className='social-links mt-4'>
									<a
										href='https://github.com/falcofelipe'
										target='_blank'
										rel='noreferrer'
										className='social-icon mr-4'>
										<i className='fa fa-github'></i>
									</a>
									<a
										href='https://www.linkedin.com/in/felipe-falco277'
										target='_blank'
										rel='noreferrer'
										className='social-icon'>
										<i className='fa fa-linkedin-square'></i>
									</a>
								</div>
							</div>
						) : (
							<PokemonCurrent pokemon={current} />
						)}
					</div>
					<div className='col-md-8 col-12 px-5 py-4'>
						<Pokemon />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
