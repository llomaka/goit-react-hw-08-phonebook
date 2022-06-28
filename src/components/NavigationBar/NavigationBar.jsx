import { NavLink } from 'react-router-dom';
import Container from 'components/Container';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <header>
      <Container>
        <nav>
          <NavLink to='/register' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Register</NavLink>
          <NavLink to='/login' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Login</NavLink>
          <NavLink to='/contacts' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Contacts</NavLink>
        </nav>
      </Container>
    </header>
  );
}
