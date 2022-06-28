import { Link } from 'react-router-dom';
// import styles from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <>
      <a href='mailto:llomaka80@gmail.com'>llomaka80@gmail.com</a>
      <Link to='/logout' text='Logout'/>
    </>
  )
}
