import { Box, Button,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
const HomePage=() =>{
  const[movies,setMovies]=useState([]);
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movies))
    .catch((err)=> console.log(err));
  },[]);
  //  console.log(movies);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
<Box margin={"auto"} width="50%"  height={"40%"} padding={2}>
  <img src="https://assets.gadgets360cdn.com/pricee/assets/product/202305/The_Kerala_Story4_1683018315.jpg?downsize=680:*" 
  alt="The Kerala Story"  width={"100%"}
    height={"10%"}>
   
  </img>
</Box>
<Box 
 padding={5}
 margin="auto">
<Typography variant='h4' textAlign={'center'} > Latest Releases</Typography>
</Box>
<Box 
margin="auto"
display={"flex"}
width="80%"
justifyContent={'center'}
alignItems={"center"}
flexWrap={"wrap"}>

{movies && 
movies.slice(0,4).map((movie, index)=>(
<MovieItem 
id={movie.id} 
title={movie.title} 
posterUrl={movie.posterUrl} 
releaseDate={movie.releaseDate} 
key={index}/>
))}
</Box>
<Box display="flex" padding={5} margin="auto">
<Button LinkComponent={Link} to="/movies" variant="outlined" sx={{margin:"auto",
color:"#2b2d42"}}>
View All Movies  
</Button>
</Box>
</Box>
  );
};

export default HomePage
