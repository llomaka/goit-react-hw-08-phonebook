import { Typography, Link } from '@mui/material';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 2 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://llomaka.github.io/goit-react-hw-08-phonebook/">
        Lilia Lomaka Phonebook React Project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
