import useContactForm from 'hooks/useContactForm';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, TextField, Snackbar } from '@mui/material';
import useSnackbar from 'hooks/useSnackbar';
import AddIcon from '@mui/icons-material/Add';
import { usePostContactMutation, useGetAllContactsQuery } from 'service/contactsApi';
import { useEffect } from 'react';

export default function ContactForm() {
  const { name, number, id, handleInputChange, resetForm } = useContactForm();
  const { open, message, setMessage, handleClose } = useSnackbar();
  const { data: contacts } = useGetAllContactsQuery();
  const [postContact, { isLoading, isSuccess, reset }] = usePostContactMutation();

  useEffect(() => {
    if (isSuccess && name !== '') {
      setMessage(`${name} is successfully added to Contacts List!`);
      resetForm();
      reset();
    }
  }, [isSuccess, name, resetForm, setMessage, reset]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts?.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return setMessage(`${name} is already in Contacts List!`);
    }
    if (name === '' && number === '') {
      return setMessage('Please enter values into Name and Number fields!');
    }
    postContact({ name, number });
  };

  return (
    <>
      <Box
        component='form'
        autoComplete='on'
        onSubmit={handleSubmit}
        sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'normal', md: 'flex-end' }, marginBottom: '30px' }}
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
        <LoadingButton sx={{ display: { xs: 'none', md: 'flex' } }} startIcon={<AddIcon />} type='submit' onClick={handleSubmit} name='submit_button' variant='contained' loading={isLoading}>Add contact</LoadingButton>
        <LoadingButton sx={{ display: { xs: 'block', md: 'none' }, lineHeight: '0', }} type='submit' onClick={handleSubmit} name='Add Contact' aria-label='Add Contact' variant='contained' loading={isLoading}><AddIcon /></LoadingButton>
      </Box>
      <Snackbar autoHideDuration={3000} open={open} onClose={handleClose} message={message} />
    </>
  );
};
