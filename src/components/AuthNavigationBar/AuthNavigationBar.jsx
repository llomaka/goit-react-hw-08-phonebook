import { NavLink } from 'react-router-dom';
import styles from './AuthNavigationBar.module.css';

export default function AuthNavigationBar() {
  const classes = ({ isActive }) => isActive ? [styles.accent, styles.link].join(' ') : [styles.main, styles.link].join(' ');
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to='/register' className={classes}>Register</NavLink>
        <NavLink to='/login' className={classes}>Login</NavLink>
      </nav>
    </>
  );
}
