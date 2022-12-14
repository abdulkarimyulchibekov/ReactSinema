import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
export const Header = () => {
	const [inputVal, setInputVal] = useState("")
	const navigate = useNavigate()
	useEffect(() => {
		if(inputVal.trim().length) {
			navigate("/search/" + inputVal)
		} else {
			navigate("/")
		}
	}, [inputVal])
	return (
		<div className='header'>
			<div className='container'>
				<nav>
					<ul className='header-list'>
						<li className='header-item'>
							<NavLink
								className={({isActive}) => 'link' + (!isActive ? '' : ' active')}
								to='/'>
								Home Page
							</NavLink>
						</li>
						<li className='header-item'>
							<NavLink
								className={({isActive}) => 'link' + (!isActive ? '' : ' active')}
								to='/popular'>
								Popular movies
							</NavLink>
						</li>
						<li className='header-item'>
							<NavLink
								className={({isActive}) => 'link' + (!isActive ? '' : ' active')}
								to='/top-rated'>
								Top-rated Movies
							</NavLink>
						</li>
						<li className='header-item'>
							<NavLink
								className={({isActive}) => 'link' + (!isActive ? '' : ' active')}
								to='/coming'>
								Up coming Movies
							</NavLink>
						</li>
						<li className='header-item'>
							<NavLink
								className={({isActive}) => 'link' + (!isActive ? '' : ' active')}
								to='/tv-show'>
								TV-Show
							</NavLink>
						</li>
						<li className='item'>
							<input onKeyUp={(evt) => {setInputVal(evt.target.value)}} className='header-input' type="text" placeholder='Search...'/>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
