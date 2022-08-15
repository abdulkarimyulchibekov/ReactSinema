import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { PopularItem } from '../PopularItem/PopularItem';
import { TvItem } from '../TvItem/TvItem';

export const TV = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/tv/popular?api_key=59867cf02cd5475d04f7dec22c933487',
			)
			.then(function (response) {
				setData(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	console.log(data);
	return (
		<div className='box'>
			<div className='container'>
				<ul className='toprated-list'>
					{data.map((e) => (
						<TvItem
							id={e.id}
							key={e.id}
							img={e.poster_path}
							name={e.original_title}
							overview={e.overview}
							point={e.vote_average}
							date={e.release_date}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
