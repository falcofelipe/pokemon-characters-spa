import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
	return (
		<div id='main-navbar' className='navbar navbar-dark bg-primary'>
			<div className='container'>
				<h1 className='navbar-brand text-light'>{title}</h1>
				<ul className='navbar-nav ml-auto'>
					<Fragment>
						<li className='nav-item'>
							<Link to='/' className='nav-link text-light'>
								Home
							</Link>
						</li>
					</Fragment>
				</ul>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Felipe's Pokemon",
};

export default Navbar;
