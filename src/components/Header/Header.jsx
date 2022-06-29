import PropTypes from 'prop-types';
import styles from './Header.module.css';

export default function Header({ text }) {
  return (
    <h1 className={styles.text}>{text}</h1>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
