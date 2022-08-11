import axios from 'axios';
import React from 'react';
import { useRef, useContext } from 'react';
import './login.scss';
import { useAuth } from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const elEmail = useRef();
	const elPassword = useRef();
	const { token, setToken } = useAuth();
  const navigate = useNavigate();
	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://reqres.in/api/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				if (response.data) {
					setToken(response.data);
          navigate("/")
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<>
			<form onSubmit={handleFormSubmit} className='container form'>
				<h1 className='form-header'>Login</h1>
				<input
					ref={elEmail}
					className='form-input'
					type='email'
					placeholder='Email...'
				/>
				<input
					ref={elPassword}
					className='form-input'
					type='password'
					placeholder='Password...'
				/>
				<button className='form-button' type='submit'>
					Send
				</button>
			</form>
		</>
	);
};
