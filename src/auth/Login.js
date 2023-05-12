import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField, MenuItem } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const options = [
    { label: 'Candidate', value: 'candidate' },
    { label: 'Recruiter', value: 'recruiter' },
  ];

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let base_uri = "http://localhost:8000"
    axios.post(base_uri + "/api/validate/", {
      email: email,
      password: password,
      type: selectedOption
    }).then((response) => {
      if (response.status == 200) {
        if (selectedOption == "candidate") {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          navigate('/')
        } else {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          navigate('/rhome')
        }
      } else {
        alert("Invalid credentials")
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              margin="normal"
              select
              required
              fullWidth
              label="Select your user"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // href={selectedOption === "candidate" ? "/" : "/rhome"}
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href={"/csignup"} variant="body2">
                  Candidate Sign Up
                </Link>
              </Grid>
              <Grid item>
                <Link href={"/rsignup"} variant="body2">
                  Recruiter Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}