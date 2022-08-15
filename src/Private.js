import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Popular } from './Components/Popular/Popular';
import { TopRated } from './Components/TopRated/TopRated';
import { TV } from './Components/TV/TV';
import { UpComing } from './Components/UpComing/UpComing';
import { Home } from './Pages/Home/Home';
import { SinglePage } from './Pages/SinglePage/SinglePage';
import { SinglePageTV } from './Pages/SinglePageTV/SinglePage';

export const Private = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular/*' element={<Popular />} />
				<Route path='/top-rated/*' element={<TopRated />} />
				<Route path='/movie/:id' element={<SinglePage />} />
				<Route path='/coming/*' element={<UpComing/>} />
				<Route path='/tv-show/*' element={<TV/>} />
				<Route path='/tv/:id' element={<SinglePageTV/>} />
				<Route path='*' element={<>404 ERROR bunaqa page topilmadi!!!</>} />
			</Routes>
		</>
	);
};
