import React from 'react';

export const TopRatedItem = ({img, name, overview, point, date}) => {
	return (
		<li className='toprated-item'>
			<img src={`https://image.tmdb.org/t/p/w500/${img}`} />
			<div className='toprated-item__body'>
				<h2>{name}</h2>
				<p>
					{
            overview
          }
				</p>
				<span className='point'>
          {
            point
          }
        </span>
				<p>{date}</p>
			</div>
		</li>
	);
};
