import { Link } from "react-router-dom";

import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { ROUTES } from "../../constants/routes";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
          {/* <Link to={ROUTES.home}> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          {/* </Link> */}
        </Box>
        <Link to={ROUTES.signUp}>
          <Typography>Don't have account? Sign up</Typography>
        </Link>
      </Container>
    </>
  );
}
