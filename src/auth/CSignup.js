import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

const theme = createTheme();

export default function CSignUp() {
  // const [name, setName] = useState("");
  // const [phn, setPhn] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPass] = useState("");
  // const [dob, setDob] = useState("");
  // const [addr, setAddr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // let base_uri = "http://localhost:8000"
    // axios.post(base_uri + "/api/validate/", {
    //   userName: "Jay",
    //   contactNumber: "",
    //   emailId: "",
    //   password: "",
    //   dateOfBirth: "",
    //   address: ""
    // }).then((response) => {
    //   if (response.status == 200) {
    //     if (selectedOption == "candidate") {
    //       localStorage.setItem("userInfo", JSON.stringify(response.data));
    //       navigate('/')
    //     } else {
    //       localStorage.setItem("userInfo", JSON.stringify(response.data));
    //       navigate('/rhome')
    //     }
    //   } else {
    //     alert("Invalid credentials")
    //   }
    // }).catch(function (error) {
    //   console.log(error);
    // });
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
            Candidate Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fname"
              label="Full Name"
              name="fname"
              autoComplete="fname"        
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="mobile"
              label="Mobile No."
              id="mobile"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="dob"
              label="Date of Birth"
              name="dob"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
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
            />
            <Button
              href={"/"}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}