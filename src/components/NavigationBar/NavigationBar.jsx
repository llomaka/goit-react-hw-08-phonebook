import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styles from './NavigationBar.module.css';
import Box from '@mui/material/Box';

export default function NavigationBar() {
  return (
    <Box className={styles.nav}>
      <ContactPhoneIcon />
      <Typography variant='button'>Contacts</Typography>
    </Box>
  );
}
