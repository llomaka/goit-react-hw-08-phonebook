import { useState, useId } from 'react';
import { authOperations, authSelectors } from 'redux/authorization';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, TextField, Link, Grid, Box, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = useId();
  const dispatch = useDispatch();
  const isCreatingUser = useSelector(authSelectors.isCreatingUser);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authOperations.createUser({ name, email, password }));
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='name'
                name='name'
                required
                fullWidth
                id={id + 'name'}
                label='Full Name'
                autoFocus
                type='text'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder='Oleksandra Lomaka'
                onChange={handleInputChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Email Address'
                autoComplete='email'
                type='email'
                name='email'
                title='Email address'
                id={id + 'email'}
                placeholder='olomaka@gmail.com'
                onChange={handleInputChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Password'
                autoComplete='new-password'
                type={showPassword ? 'text' : 'password'}
                name='password'
                minLength={8}
                title='Password must be longer, than 8 characters, preferably contain at least one number and one uppercase character, not contain spaces and parentheses'
                id={id + 'password'}
                placeholder='pa$sw0rD'
                onChange={handleInputChange}
                value={password}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            loading={isCreatingUser}
          >
            Sign Up
          </LoadingButton>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/goit-react-hw-08-phonebook/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
