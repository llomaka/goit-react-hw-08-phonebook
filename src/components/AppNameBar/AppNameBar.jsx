import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styles from './AppNameBar.module.css';

export default function AppNameBar() {
  return (
    <Toolbar className={styles.nav}>
      <ContactPhoneIcon />
      <Typography variant='button'>Contacts</Typography>
    </Toolbar>
  );
}
