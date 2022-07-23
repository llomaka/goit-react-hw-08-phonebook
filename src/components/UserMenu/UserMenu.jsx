import { authSelectors, authOperations } from 'redux/authorization';
import { changeFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography, Toolbar } from '@mui/material';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(changeFilter(''));
    dispatch(authOperations.logoutUser());
  };

  return (
    <Toolbar disableGutters sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <AccountCircleIcon />
      <Typography>Welcome, {email}</Typography>
      <Button onClick={logout} >Logout</Button>
    </Toolbar>
  );
}
