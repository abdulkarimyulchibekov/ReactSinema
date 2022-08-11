import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login/Login';

export const Public = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						Public home page <Link to='/login'>Link</Link>
					</>
				}
			/>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<>404 ERROR bunaqa page topilmadi!!!</>} />
		</Routes>
	);
};
