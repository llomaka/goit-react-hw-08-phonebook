import { authSelectors, authOperations } from 'redux/authorization';
import { changeFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography, Toolbar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = () => {
    dispatch(changeFilter(''));
    dispatch(authOperations.logoutUser());
  };

  return (
    <Toolbar disableGutters>
      <Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-user"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-user"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            <MenuItem>
              <Typography>Welcome, {email}</Typography>
              <Button onClick={logout} startIcon={<LogoutIcon />}>Logout</Button>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '5px', alignItems: 'center' }} onClick={handleCloseNavMenu}>
          <AccountCircleIcon />
          <Typography>Welcome, {email}</Typography>
          <Button onClick={logout} startIcon={<LogoutIcon />}>Logout</Button>
        </Box>
      </Box>
    </Toolbar>
  );
}
