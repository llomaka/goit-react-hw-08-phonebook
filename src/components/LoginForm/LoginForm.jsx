import { useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/authorization';
import { Avatar, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = useId();
  const dispatch = useDispatch();
  const isSigningInUser = useSelector(authSelectors.isSigningInUser);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
  };

  return (
    <Container component='div' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h2' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='Email Address'
            autoComplete='email'
            autoFocus
            type='email'
            name='email'
            title='Email address'
            id={id + 'email'}
            placeholder='olomaka@gmail.com'
            onChange={handleInputChange}
            value={email}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Password'
            autoComplete='current-password'
            type='password'
            name='password'
            minLength={8}
            title='Password must be longer, than 8 characters, contain at least one number and one uppercase character, not contain spaces and parentheses'
            id={id + 'password'}
            placeholder='pa$sw0rD'
            onChange={handleInputChange}
            value={password}
          />
          <LoadingButton
            onClick={handleSubmit}
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            loading={isSigningInUser}
          >
            Sign In
          </LoadingButton>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/goit-react-hw-08-phonebook/register' variant='body2'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
