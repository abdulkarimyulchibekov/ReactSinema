import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PaginationMovies } from '../../Components/Pagination/Pagination';
import { PopularItem } from '../../Components/PopularItem/PopularItem';
import useDebounce from '../../hook/useDebounce';

export const Search = () => {
	const { searchQuery } = useParams();
	const [activePage, setActivePage] = useState(1);
	const debouncedValue = useDebounce(searchQuery, 500);
	const [movies, setMovies] = useState({
		isloading: true,
		isError: false,
		data: {},
		totalPage: 0,
	});

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/search/movie', {
				params: {
					api_key: '59867cf02cd5475d04f7dec22c933487',
					page: activePage,
					query: debouncedValue,
				},
			})
			.then((res) =>
				setMovies({
					isloading: false,
					isError: false,
					data: res.data.results,
					totalPage: res.data.total_pages,
				}),
			)
			.catch((err) =>
				setMovies({
					...movies,
					isloading: false,
					isError: true,
				}),
			);
	}, [searchQuery, debouncedValue]);
	console.log(movies);
	return (
		<div className='container'>
			{movies.data.length && (
				<ul className='toprated-list'>
					{movies.data.map((e) => (
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
			)}
			<PaginationMovies page={movies.totalPage} setActivePage={setActivePage} />
		</div>
	);
};
