import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helpers';
import MovieItem from './MovieItem';

const Movies = () => {
  const[movies,setMovies]=useState();
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movies))
    .catch((err)=>console.log(err));
  });
  // console.log(movies);
  return(
    <Box margin={"auto"} marginTop={3}>
<Typography 
margin={"auto"}
variant='h4'
padding={2}
width="40%"
bgcolor={"#900c4f"}
color="white"
textAlign={'center'}
>
All Movies
</Typography>
<Box
width={"100%"}
  margin="auto"
  marginTop={5}
  justifyontent="flex-start"
  display={"flex"}
  justifyContent={"center"}
  flexwrap={"wrap"}
>
  {movies &&movies.map((movie,index)=>
  <MovieItem 
id={movie._id} 
title={movie.title} 
posterUrl={movie.posterUrl} 
releaseDate={movie.releaseDate} 
key={index}

/>)}
</Box>
    </Box>
  );
}

export default Movies

