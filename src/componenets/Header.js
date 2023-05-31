import React,{useEffect, useState }from 'react';
import {AppBar, Autocomplete, Tab, Tabs, TextField, Toolbar} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system";
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

//const dummyArray=["Bharamashtra", "Karan-Arjun"];

function Header(){
const[value,setValue]=useState(0);
const [movies,setMovies]=useState([]);
useEffect(()=>{
  getAllMovies()
  .then((data)=>setMovies(data.movies))
  .catch((err)=>console.log(err));
},[]);
  return (
    <AppBar position="sticky" sx={{bgcolor:"#2b2d42"}}>
       <Toolbar>
            <Box width={"20%"}>
                <MovieIcon/>
            </Box>
            <Box width={"30%"} margin={"auto"} >
            <Autocomplete
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) => <TextField
        sx={{input:{color:"white"}} }  
         variant='standard'{...params} placeholder="Search-Movie" />}
      />
            </Box>
            <Box display={"flex"}>
              <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e,val)=> setValue(val)}>
              <Tab LinkComponent={Link} to="/movies" label="Movies" />
                <Tab label="Admin" LinkComponent={Link} to="/Admin"/>
                <Tab label="Auth" LinkComponent={Link} to="/Auth"/>
              </Tabs>
            </Box>
       </Toolbar>
    </AppBar>
  )
}

export default Header
