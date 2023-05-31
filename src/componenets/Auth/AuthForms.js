import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import React, { useState } from 'react'
const labelStyle={mt:1,mb:1}
const AuthForms = ({onSubmit, isAdmin}) => {
    const[inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",
    });
    const [isSignup ,setIsSignup]= useState(false);
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(inputs);
        onSubmit({inputs, signup:isAdmin ? false :isSignup});
    };

  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={"true"}>
    <Box sx={{ml:"auto", padding:1}}>
        <IconButton>
            <CancelPresentationIcon/>
        </IconButton>
    </Box>
        <Typography variant='h4' textAlign={'center'}>
            Login Page
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box
            padding={4}
             display={"flex"}
             justifyContent={"center"}
             flexDirection={"column"}
             width={300}
             margin={"auto"}
             alignItems={"center"} 
            >
{ !isAdmin && isSignup &&(
    <>{""}
                <FormLabel sx={labelStyle}>Name</FormLabel>
                <TextField 
                value={inputs.name}
                onChange={handleChange}
                margin='normal'
                 variant='standard'
                  type='text' 
                  name="name"/>
                  </>
)}
                <FormLabel sx={labelStyle}>Email</FormLabel>
                <TextField
                value={inputs.email}
                onChange={handleChange}
                 margin='normal'
                 variant='standard'
                  type='email' 
                  name="email"/>

                <FormLabel sx={labelStyle}>Password</FormLabel>
                <TextField 
                value={inputs.password}
                onChange={handleChange}
                 margin='normal'
                  variant='standard' 
                 type='password'
                  name="password"
                 />
                <Button  sx={{mt:2, borderRadius:10, bgcolor:"#2b2d42"}}
                type="submit" fullWidth
                variant='contined'
                >{isSignup ? "Login": "Signup"}</Button>
{!isAdmin && (
                <Button onClick={()=>setIsSignup(!isSignup)} sx={{mt:2, borderRadius:10, }}
                fullWidth
                >Switch To {isSignup ? "Login":"Signup"}
                </Button>)}
            </Box>
        </form>
    </Dialog>
  )
}

export default AuthForms
