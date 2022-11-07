import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import backgroundMobile from '../../images/login.png';
import background from '../../images/login-pc.png';
import zIndex from '@mui/material/styles/zIndex';
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
            background-image: url(${background});
            background-repeat: no-repeat;
            background-size: 80% 100vh;
            background-color: #383838;
            background-position: left top;
            // center the page
          position: absolute;
 
            left: 55%;
            top: 40%;
            
            @media (max-width: 600px) {
                background-image: url(${backgroundMobile});
                background-size: 100%;
                background-color: #383838;
                position: absolute;
                width: 100%;
                left: 0;
                buttom: 0;
                margin: 0 auto;
            }
        }
        `
    }
  }
});

export const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          padding: '20px',
          width: '100%'
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Avatar sx={{ m: 1, bgcolor: '#D8AB4E' }}>
            <LockOutlinedIcon sx={{ color: 'white' }} />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: 'white'
            }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{
                // label color
                '& label': {
                  color: '#D8AB4E'
                },
                '& label.Mui-focused': {
                  color: '#D8AB4E'
                },
                // border color
                ' & .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#D8AB4E'
                  },
                  '&:hover fieldset': {
                    borderColor: '#D8AB4E'
                  }
                },
                // input color
                '& .MuiInputBase-input': {
                  color: '#D8AB4E'
                },
                // field background color
                '& .MuiInputBase-root': {
                  backgroundColor: '#525252'
                }
              }}
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
              sx={{
                // label color
                '& label': {
                  color: '#D8AB4E'
                },
                '& label.Mui-focused': {
                  color: '#D8AB4E'
                },
                // border color
                ' & .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#D8AB4E'
                  },
                  '&:hover fieldset': {
                    borderColor: '#D8AB4E'
                  }
                },
                // input color
                '& .MuiInputBase-input': {
                  color: '#D8AB4E'
                },
                // field background color
                '& .MuiInputBase-root': {
                  backgroundColor: '#525252'
                }
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: '#D8AB4E'
                    }
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: '#D8AB4E'
                  }}>
                  Remember me
                </Typography>
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#D8AB4E' }}>
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  lineHeight: '19px'
                }}>
                Sign In
              </Typography>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <Typography
                    sx={{
                      color: '#D8AB4E'
                    }}>
                    Forgot password?
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  <Typography
                    sx={{
                      color: '#D8AB4E'
                    }}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
