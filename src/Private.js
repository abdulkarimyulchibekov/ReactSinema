import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { TopRated } from './Components/TopRated/TopRated';
import { Home } from './Pages/Home/Home';
import { Login } from './Pages/Login/Login';
import { Users } from './Pages/Users/Users';

export const Private = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular/*' element={<h1>Popular movies</h1>} />
				<Route path='/top-rated/*' element={<TopRated/>} />
				<Route path='/coming/*' element={<h1>Up coming Movies</h1>} />
				<Route path='/tv-show/*' element={<h1>TV Show</h1>} />
				<Route path='*' element={<>404 ERROR bunaqa page topilmadi!!!</>} />
			</Routes>
		</>
	);
};
