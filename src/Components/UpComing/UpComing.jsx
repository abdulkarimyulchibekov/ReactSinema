import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { PopularItem } from '../PopularItem/PopularItem';
import { PaginationMovies } from '../Pagination/Pagination';

export const UpComing = () => {
	const [activePage, setActivePage] = useState(1)
	const [data, setData] = useState({
		isLoading: true,
		isError: false,
		data: [],
		totalPage: 1
	});
	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/upcoming',{
					params: {
						api_key: "59867cf02cd5475d04f7dec22c933487" ,
						page:  activePage,
					}
				}
			)
			.then(function (response) {
				console.log(response.data);
				setData({
					isLoading:  false,
					isError: false,
					data: response.data.results,
					totalPage: response.data.total_pages > 500 ? 500 : response.data.total_pages,
				}
				);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [activePage]);
	return (
		<div className='box'>
			<div className='container'>
				<ul className='toprated-list'>
					{data?.data?.map((e) => (
						<PopularItem
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
			<PaginationMovies page={data.totalPage} setActivePage={setActivePage} />
		</div>
	);
};
