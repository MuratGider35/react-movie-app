import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Box, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { createUser, signUpWithGoogle } from "../auth/firebase";
// import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);
    console.log(firstName, lastName);
  };

  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
        }}
        className="bgcinema"
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "250px" }}
            className="bgform"
          >
            <TextField
              id="outlined-basic"
              label="Firs Name"
              variant="outlined"
              required
              size="small"
              margin="dense"
              color="secondary"
              helperText="Please enter your first name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setFirstName(e.target.value)}
              type="e-mail"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              size="small"
              margin="dense"
              color="secondary"
              helperText="Please enter your last name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              type="e-mail"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="e-mail"
              variant="outlined"
              required
              size="small"
              margin="dense"
              color="secondary"
              helperText="Please enter your e-mail"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              type="e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              required
              size="small"
              margin="dense"
              color="secondary"
              helperText="Please enter your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" value="Register" variant="contained">
              REGISTER
            </Button>
            <Button onClick={handleGoogleProvider} variant="contained">
              CONTINUE WİTH GOOGLE
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Register;
