import { Typography, Toolbar } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function AppNameBar() {
  return (
    <Toolbar disableGutters sx={{ flexGrow: 1, display: 'flex', gap: '15px', alignItems: 'center' }}>
      <ContactPhoneIcon />
      <Typography variant='button'>Contacts</Typography>
    </Toolbar>
  );
}
