import { useGetCurrentUserInfoQuery, useLogoutUserMutation, useLoginUserMutation } from 'service/authorizationApi';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const [logoutUser, { data: info, error, isUninitialized, isLoading, isSuccess, isError }] = useLogoutUserMutation();
  console.log('data:', info, ';', 'error:', error, ';', 'isUninitialized:', isUninitialized, ';', 'isLoading', isLoading, ';', 'isSuccess:', isSuccess, ';', 'isError:', isError);
  const [loginUser, { data: { user: { name, token } } }] = useLoginUserMutation();
  const {data: currentUser} = useGetCurrentUserInfoQuery(token);
  console.log(token);

  function handleLogoutClick(token) {
    if (!token) return;
    logoutUser(token);
  }

  return (
    <div className={styles.menu}>
      <p>Welcome, {name}</p>
      <p className={styles.button} onClick={()=>handleLogoutClick(token)}>Logout</p>
    </div>
  )
}
