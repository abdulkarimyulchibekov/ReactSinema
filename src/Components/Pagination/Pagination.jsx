import React from 'react'
import { Pagination } from '@mui/material';

export const PaginationMovies = ({setActivePage, page}) => {
  return (
    <Pagination 
				onClick={(evt) => setActivePage(evt.target.innerText)} 
				className='pagination' 
				count={page} 
				variant="outlined" 
				shape="rounded" 
			/>
  )
}
