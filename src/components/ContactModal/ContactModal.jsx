import { useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import useContactForm from 'hooks/useContactForm';
import useSnackbar from 'hooks/useSnackbar';
import EditIcon from '@mui/icons-material/Edit';
import { useEditContactByIdMutation, useGetAllContactsQuery } from 'service/contactsApi';
import PropTypes from 'prop-types';

export default function ContactModal({ contactObj, openModal, setOpenModal }) {
  const { name, setName, number, setNumber, id, handleInputChange, resetForm } = useContactForm();
  const { data: contacts } = useGetAllContactsQuery();
  const { open, message, setMessage, handleClose } = useSnackbar();
  const [editContact, { isLoading, isSuccess, reset }] = useEditContactByIdMutation();

  useEffect(() => {
    setName(contactObj.name);
    setNumber(contactObj.number);
  }, [contactObj, setName, setNumber]);

  useEffect(() => {
    if (isSuccess && name !== '') {
      setMessage(`Contact ${name} information is successfully changed!`);
      resetForm();
      reset();
      setOpenModal(false);
    }
  }, [isSuccess, name, resetForm, setMessage, setOpenModal, reset]);

  const handleModalClose = (event) => {
    if (event.target.name !== 'edit') {
      setOpenModal(false);
      resetForm();
      return;
    }
    if ((name.toLowerCase() === contactObj.name.toLowerCase()) && (number === contactObj.number)) {
      return setMessage(`Please make changes to contact ${name} information or press Cancel to exit Edit Contact dialog.`);
    }
    if (contacts?.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return setMessage(`${name} is already in Contacts List!`);
    }
    if (name === '' && number === '') {
      return setMessage('Please enter values into Name and Number fields!');
    }
    editContact({ id: contactObj.id, name, number });
};

  return (
    <>
      {name && <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Contact Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id={id + 'name'}
            label='Full Name'
            name='name'
            type='text'
            fullWidth
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
            fullWidth
            variant='standard'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            placeholder='050-123-23-23'
            onChange={handleInputChange}
            value={number}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton startIcon={<EditIcon />} onClick={handleModalClose} name='edit' variant='contained' loading={isLoading}>Edit</LoadingButton>
          <Button onClick={handleModalClose} variant='contained'>Cancel</Button>
        </DialogActions>
      </Dialog>}
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose} message={message} />
    </>
  );
}

ContactModal.propTypes = {
  contactObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired
};
