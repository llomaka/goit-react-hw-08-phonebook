import { authSelectors, authOperations } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import { clearContacts } from 'redux/contacts/contactsSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function UserMenu() {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearContacts());
    dispatch(authOperations.logoutUser());
  };

  return (
    <Toolbar sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <AccountCircleIcon />
      <Typography>Welcome, {username}</Typography>
      <Button onClick={() => logout()} >Logout</Button>
    </Toolbar>
  );
}
