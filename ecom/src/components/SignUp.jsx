import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { Toast } from 'react-bootstrap';







function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();






export default function SignUp() {
  // step 1 
  let nav=useNavigate();
// step 2
  let initialvalue;
  if(localStorage.getItem("Users")===null){
    initialvalue=[]
  }else{
    initialvalue=JSON.parse(localStorage.getItem("Users"))
  }




  // step1
    const [fname,setFname]=useState(" ")
    const [lname,setLname]=useState(" ")
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    console.log(fname,lname,email,password)




    const [value,setValue]=useState(initialvalue)



   




    






  const handleSubmit = async(event) => {
    event.preventDefault();
   
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    let userid=101
    if(value.length === 0){
      userid=101
    }else
    {
      userid=value[value.length-1].userid+1
    }




    const ob={
      userid:userid,
      fname:fname,
      lname:lname,
      email:email,
      password:password
      
    }


    setValue([...value,ob])



    localStorage.setItem("Fname",fname)
    localStorage.setItem("Lname",lname)
    localStorage.setItem("Email",email)
    localStorage.setItem("Password",password)


    await localStorage.setItem("Users",JSON.stringify(value))
   


    nav("/")

    
    
  


    




  };
  useEffect(()=>{
    localStorage.setItem("Users",JSON.stringify(value))

  },[value])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>{setFname(e.target.value)}}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>{setLname(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}