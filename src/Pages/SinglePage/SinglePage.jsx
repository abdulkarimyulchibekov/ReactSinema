import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './singlepage.scss';

export const SinglePage = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [credits, setCredits] = useState([]);
	const [recommendations, setRecommendations] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/' + id, {
				params: {
					api_key: '59867cf02cd5475d04f7dec22c933487',
				},
			})
			.then(function (response) {
				setMovie(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/' + id + '/credits', {
				params: {
					api_key: '59867cf02cd5475d04f7dec22c933487',
				},
			})
			.then(function (response) {
				setCredits(response.data.cast);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/' + id + '/recommendations', {
				params: {
					api_key: '59867cf02cd5475d04f7dec22c933487',
					page: 1,
				},
			})
			.then(function (response) {
				setRecommendations(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	const list = movie.genres;
	const production = movie.production_companies;

	return (
		<div className='movie'>
			<div className='movie__container'>
				<p className='movie__title'>{movie.title}</p>
				<p className='movie__tagline'>{movie.tagline}</p>
				<div className='movie__body'>
					<img
						className='movie__img'
						src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
					/>
					<div className='movie__content'>
						<p className='movie__text'>{movie?.belongs_to_collection?.name}</p>
						<p className='movie__overview'>{movie.overview}</p>
						<ul className='movie__list'>
							{list?.map((data) => (
								<li key={data.id}>{data.name}</li>
							))}
						</ul>

						<p className='movie__budget'>Movie Budget: {movie.budget}</p>
						<p className='item-active'>
							<strong>Production Companies</strong>
						</p>

						<ul className='movie__production'>
							{production?.map((data) => (
								<li key={data.id}>{data.name}</li>
							))}
						</ul>

						<p className='movie__date'>Release date : {movie.release_date}</p>
						<a className='movie__page' target={'_blank'} href={movie.homepage}>
							Movie Home Page
						</a>
					</div>
				</div>
				<div className='movie__box'>
					<div className='movie__list'>
						<p className='movie__subtitle'>Actors</p>
						<ul>
							{credits.length &&
								credits.map((e) => (
									<li key={e.id} className='movie__item'>
										<Link to={`/actors/${e.id}`}>{e.name}</Link>
									</li>
								))}
						</ul>
					</div>
					<div className='movie__list2'>
						<p className='movie__subtitle'>Recommended Films</p>
						<ul>
							{recommendations.length &&
								recommendations.map((e) => (
									<li className='movie__item' key={e.id}>
										<Link to={`/movie/${e.id}`}>{e.title}</Link>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
