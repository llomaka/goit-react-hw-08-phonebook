import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { deleteReduxContact } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  const handleClick = (id, name) => {
    dispatch(contactsOperations.deleteContact(id));
    dispatch(deleteReduxContact(id));
    // toast.info(`Contact ${name} is successfully deleted!`);
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
