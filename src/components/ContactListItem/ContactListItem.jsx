// import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import { deleteContact } from "redux/contactsOperations";
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export default function ContactListItem({ contact }) {
  const { name, number, id } = contact;

  const handleClick = (id, name) => {
    deleteContact(id);
    toast.info(`Contact ${name} is successfully deleted!`);
  };

  return (
    <>
      <p>{name}: {number}</p>
      <button
        className={styles.button}
        type='button'
        onClick={() => handleClick(id, name)}
        // disabled={isLoading}
      >
        {/* {isLoading && <ClipLoader size={16} color='#fff' />} */}
        <span>Delete</span>
      </button>
    </>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
