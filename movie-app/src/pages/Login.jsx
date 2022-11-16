import React from "react";
import { TextField, InputAdornment, Box, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
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
        <form>
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "250px" }}
            className="bgform"
          >
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
            />
            <Button variant="contained">LOGIN</Button>
            <Button variant="contained" color="warning">
              SIGN IN WITH GOOGLE
            </Button>
          </Box>
        </form>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/register">Do you have not an account?</Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
