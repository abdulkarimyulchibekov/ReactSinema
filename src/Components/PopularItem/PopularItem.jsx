import React from 'react';
import { Link } from 'react-router-dom';

export const PopularItem = ({ img, name, overview, point, date, id  }) => {
	return (
		<li className='toprated-item'>
			<Link className='link' to={`/movie/${id}`}>
				<img src={`https://image.tmdb.org/t/p/w500/${img}`} />
				<div className='toprated-item__body'>
					<h2>{name}</h2>
					<p>{overview}</p>
					<span className='point'>{point}</span>
					<p>{date}</p>
				</div>
			</Link>
		</li>
	);
};
