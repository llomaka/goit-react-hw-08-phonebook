import { useLogoutUserMutation } from 'service/authorizationApi';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const [logoutUser, { data, error, isUninitialized, isLoading, isSuccess, isError }] = useLogoutUserMutation();

  console.log('data:', data, ';', 'error:', error, ';', 'isUninitialized:', isUninitialized, ';', 'isLoading', isLoading, ';', 'isSuccess:', isSuccess, ';', 'isError:', isError);

  function handleLogoutClick() {
    logoutUser();
  }

  return (
    <div className={styles.menu}>
      <p>Welcome,</p>
      <a href='mailto:llomaka80@gmail.com'>llomaka80@gmail.com</a>
      <p className={styles.button} onClick={handleLogoutClick}>Logout</p>
    </div>
  )
}
