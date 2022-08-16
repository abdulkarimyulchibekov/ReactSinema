import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Actors.scss';
import { Link, useParams } from 'react-router-dom';

export const Actors = () => {
	const { actorId } = useParams();
	const [data, setData] = useState({
		isLoading: true,
		isError: false,
		data: {},
	});
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/person/' + actorId, {
				params: {
					api_key: '59867cf02cd5475d04f7dec22c933487',
				},
			})
			.then(function (response) {
				console.log(response.data);
				setData({
					isLoading: false,
					isError: false,
					data: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [actorId]);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/person/' + actorId + '/movie_credits',
				{
					params: {
						api_key: '59867cf02cd5475d04f7dec22c933487',
					},
				},
			)
			.then(function (response) {
				setMovies(response.data.cast);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	console.log(movies);
	return (
		<div className='actor'>
			<div className='container actor__container'>
				<img
					className='actor__img'
					src={`https://image.tmdb.org/t/p/w400/${data.data.profile_path}`}
					alt=''
				/>
				<div className='actor__body'>
					<h1 className='actor__header'>{data.data.name}</h1>
					<p className='actor__birthday'>Date of birth: {data.data.birthday}</p>
					<p className='actor__birthplace'>
						Place of birth: {data.data.place_of_birth}
					</p>
					<a
						className='actor__homepage'
						target={'_blank'}
						href={data.data.homepage}>
						Actor's home page
					</a>
					<p className='actor__biography'>{data.data.biography}</p>
				</div>
			</div>
			<div className='container'>
				<p className='actor__subheader'>Actor's Films</p>
				<ul className='actor__list'>
					{movies.length &&
						movies.map((e) => (
							<li className='actor__item'>
								<Link to={`/movie/${e.id}`}>{e.original_title}</Link>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
