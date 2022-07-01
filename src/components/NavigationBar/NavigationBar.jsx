import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  const classes = ({ isActive }) => isActive ? [styles.accent, styles.link].join(' ') : [styles.main, styles.link].join(' ');
  return (
        <nav className={styles.nav}>
      <NavLink to='/' className={classes}>Main</NavLink>
          <NavLink to='/contacts' className={classes}>Contacts</NavLink>
        </nav>
  );
}
