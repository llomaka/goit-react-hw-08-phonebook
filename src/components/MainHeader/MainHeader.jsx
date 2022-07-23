import { AppBar, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

export default function MainHeader({ children }) {
  return (
    <header>
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
    </header>
  );
}

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
