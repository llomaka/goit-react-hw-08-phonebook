import { authSelectors, authOperations } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import { clearContacts } from 'redux/contacts/contactsSlice';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearContacts());
    dispatch(authOperations.logoutUser());
  };

  return (
    <>
      <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '20px'}}>
        <AccountCircleIcon color='primary' fontSize='large' />
        <p>Welcome, {username}</p>
        <Button onClick={() => logout()} size='large'>Logout</Button>
      </Box>
    </>
  );
}
