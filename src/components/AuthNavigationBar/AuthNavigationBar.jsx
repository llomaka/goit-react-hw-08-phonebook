import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, Menu, MenuItem, IconButton, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './AuthNavigationBar.module.css';

export default function AuthNavigationBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const classes = ({ isActive }) => isActive ? [styles.accent, styles.link].join(' ') : [styles.main, styles.link].join(' ');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Toolbar disableGutters >
        <nav className={styles.nav}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label='user authentication menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              <MenuItem key='register' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink to='/register' className={classes}>Register</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='login' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink to='/login' className={classes}>Login</NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='register'
              onClick={handleCloseNavMenu}
              sx={{ display: 'block' }}
            >
              <NavLink to='/register' className={classes}>Register</NavLink>
            </Button>
            <Button
              key='login'
              onClick={handleCloseNavMenu}
              sx={{ display: 'block' }}
            >
              <NavLink to='/login' className={classes}>Login</NavLink>
            </Button>
          </Box>
        </nav>
      </Toolbar>
    </>
  );
}
