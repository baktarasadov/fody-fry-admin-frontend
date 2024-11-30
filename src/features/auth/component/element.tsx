import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Button as Material,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

function Email() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}

function Password() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function LoginButton() {
  return (
    <Material
      type="submit"
      variant="contained"
      size="small"
      disableElevation
      fullWidth
      onClick={() => {
        console.log("Enter Password");
      }}
      sx={{ my: 2 }}
    >
      Log In
    </Material>
  );
}

function Title() {
  return <h2 style={{ marginBottom: 8 }}>Admin Login</h2>;
}

function SubTitle() {
  return (
    <Alert sx={{ mb: 2, px: 1, py: 0.25 }} severity="warning">
      We are investigating an ongoing outage.
    </Alert>
  );
}

export const AUTH_ELEMENT = {
  Email,
  Password,
  LoginButton,
  Title,
  SubTitle,
};
