import { useGetCurrentUserInfoQuery, useLogoutUserMutation } from 'service/authorizationApi';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const [logoutUser, { data, error, isUninitialized, isLoading, isSuccess, isError }] = useLogoutUserMutation();
  const token = data?.token;
  const {data: currentUser} = useGetCurrentUserInfoQuery(token);
  console.log('data:', data, ';', 'error:', error, ';', 'isUninitialized:', isUninitialized, ';', 'isLoading', isLoading, ';', 'isSuccess:', isSuccess, ';', 'isError:', isError);
  console.log(currentUser);

  function handleLogoutClick(token) {
    logoutUser(token);
  }

  return (
    <div className={styles.menu}>
      <p>Welcome,</p>
      <p>{data?.user?.name}</p>
      <p className={styles.button} onClick={()=>handleLogoutClick(token)}>Logout</p>
    </div>
  )
}
