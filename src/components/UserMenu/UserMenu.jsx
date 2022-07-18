import { authSelectors, authOperations } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <div className={styles.menu}>
      <p>Welcome, {username}</p>
      <p className={styles.button} onClick={() => dispatch(authOperations.logoutUser())}>Logout</p>
    </div>
  );
}
