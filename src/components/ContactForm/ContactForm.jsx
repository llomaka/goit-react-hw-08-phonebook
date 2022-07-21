import useContactForm from 'hooks/useContactForm';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import useSnackbar from 'hooks/useSnackbar';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { name, number, id, handleInputChange, resetForm } = useContactForm();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.contacts);
  const { open, message, setOpen, setMessage, handleClose } = useSnackbar();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts?.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      setMessage(`${name} is already in Contacts List!`);
      return setOpen();
    }
    dispatch(contactsOperations.createContact({ name, number }));
    setMessage(`${name} is successfully added to Contacts List!`);
    setOpen();
    resetForm();
  };

  return (
    <form
      className={styles.form}
      autoComplete='on'
      onSubmit={handleSubmit}
    >
      <div className={styles.fields}>
        <label
          className={styles.label}
          htmlFor={id + 'name'}>
          Name *
        </label>
        <input
          className={styles.input}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={id + 'name'}
          placeholder='John Smith'
          onChange={handleInputChange}
          value={name}
        />
      </div>
      <div className={styles.fields}>
        <label
          className={styles.label}
          htmlFor={id + 'number'}>
          Phone *
        </label>
        <input
          className={styles.input}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          id={id + 'number'}
          placeholder='050-123-23-23'
          onChange={handleInputChange}
          value={number}
        />
      </div>
      <button
        className={styles.button}
        type='submit'
        name='submit_button'
        // disabled={isLoading}
      >
        {/* {isLoading && <ClipLoader size={16} color='#fff' />} */}
        <span>Add contact</span>
      </button>
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose} message={message} />
    </form>
  );
};
