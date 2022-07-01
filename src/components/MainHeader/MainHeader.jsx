import PropTypes from 'prop-types';
import styles from './MainHeader.module.css';

export default function MainHeader({ children }) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
