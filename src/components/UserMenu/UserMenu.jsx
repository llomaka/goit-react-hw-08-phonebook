import { authSelectors, authOperations } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import contactsApi from 'service/contactsApi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function UserMenu() {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(contactsApi.util.resetApiState());
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
