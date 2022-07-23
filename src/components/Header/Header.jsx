import { AppBar, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

export default function Header({ children }) {
  return (
    <>
      <AppBar
        enableColorOnDark
        position='fixed'
        color='default'
        elevation={2}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        {children}
      </AppBar>
      <Toolbar />
    </>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
