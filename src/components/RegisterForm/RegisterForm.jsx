import { useState, useId } from 'react';
import { authOperations, authSelectors } from 'redux/authorization';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import useSnackbar from 'hooks/useSnackbar';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open, message, setOpen, setMessage, handleClose } = useSnackbar();
  const isCreatingUser = useSelector(authSelectors.isCreatingUser);

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

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authOperations.createUser({ name, email, password }));
    setMessage(`User ${name} is successfully created!`);
    setOpen();
    resetForm();
    navigate('/contacts');
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h2" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  autoComplete="new-password"
                  type='password'
                  name='password'
                  minLength={8}
                  title='Password must be longer, than 8 characters, preferably contain at least one number and one uppercase character, not contain spaces and parentheses'
                  id={id + 'password'}
                  placeholder='pa$sw0rD'
                  onChange={handleInputChange}
                  value={password}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              loading={isCreatingUser}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='/goit-react-hw-08-phonebook/login' variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose} message={message} />
    </>
  );
};
