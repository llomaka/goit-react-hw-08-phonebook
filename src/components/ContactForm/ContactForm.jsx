import { useState, useId } from 'react';
import { contactsOperations } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector } from 'redux/contacts';
import { toast } from 'react-toastify';
// import ClipLoader from "react-spinners/ClipLoader";
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts?.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return toast.warning(`${name} is already in Contacts List!`);
    }
    dispatch(contactsOperations.createContact({ name, number }));
    toast.info(`${name} is successfully added to Contacts List!`);
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
    </form>
  );
};
