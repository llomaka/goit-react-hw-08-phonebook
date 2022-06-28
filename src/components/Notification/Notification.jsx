import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default function Notification({ text }) {
  return (
    <h2 className={styles.text}>{text}</h2>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
