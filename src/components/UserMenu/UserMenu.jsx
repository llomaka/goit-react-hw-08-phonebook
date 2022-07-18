import { authSelectors, authOperations } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Avatar } from './avatardefault.svg';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <div className={styles.menu}>
      <Avatar width={30} height={30} />
      <p>Welcome, {username}</p>
      <p className={styles.button} onClick={() => dispatch(authOperations.logoutUser())}>Logout</p>
    </div>
  );
}
