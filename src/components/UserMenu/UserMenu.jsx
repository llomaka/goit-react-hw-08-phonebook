// import { useGetCurrentUserInfoQuery, useLogoutUserMutation, useLoginUserMutation } from 'redux/authorizationSlice';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  // const [logoutUser, { data: info, error, isUninitialized, isLoading, isSuccess, isError }] = useLogoutUserMutation();
  // console.log('data:', info, ';', 'error:', error, ';', 'isUninitialized:', isUninitialized, ';', 'isLoading', isLoading, ';', 'isSuccess:', isSuccess, ';', 'isError:', isError);
  // const [loginUser, { data }] = useLoginUserMutation();
  // const {data: currentUser} = useGetCurrentUserInfoQuery(token);
  // console.log(data);

  function handleLogoutClick(token) {
    if (!token) return;
    // logoutUser(token);
  }

  return (
    <div className={styles.menu}>
      {/* <p>Welcome, {data.user.name}</p> */}
      <p className={styles.button} onClick={() => handleLogoutClick()}>Logout</p>
    </div>
  );
}
