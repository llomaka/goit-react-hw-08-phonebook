import useContactForm from 'hooks/useContactForm';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import useSnackbar from 'hooks/useSnackbar';
import AddIcon from '@mui/icons-material/Add';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { name, number, id, handleInputChange, resetForm } = useContactForm();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.contacts);
  const isLoading = useSelector(contactsSelectors.isCreating);
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
    <>
      <form
        className={styles.form}
        autoComplete='on'
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          margin='dense'
          id={id + 'name'}
          label='Full Name'
          name='name'
          type='text'
          variant='standard'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder='John Smith'
          onChange={handleInputChange}
          value={name}
        />
        <TextField
          margin='dense'
          id={id + 'number'}
          label='Phone Number'
          name='number'
          type='tel'
          variant='standard'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          placeholder='050-123-23-23'
          onChange={handleInputChange}
          value={number}
        />
        <LoadingButton startIcon={<AddIcon />} type='submit' onClick={handleSubmit} name='submit_button' variant='contained' loading={isLoading}>Add contact</LoadingButton>
      </form>
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose} message={message} />
    </>
  );
};
