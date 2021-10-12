import { Link } from "react-router-dom";

import { Button, Container, TextField, Typography } from "@mui/material";

import { ROUTES } from "../../constants/routes";

export default function Login() {
  return (
    <>
      <Container maxWidth="xs">
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
        <Link to={ROUTES.home}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Link>
        <Link to={ROUTES.signUp}>
          <Typography>Don't have account? Sign up</Typography>
        </Link>
      </Container>
    </>
  );
}
