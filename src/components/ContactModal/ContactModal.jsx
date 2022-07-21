import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useContactForm from 'hooks/useContactForm';
import useSnackbar from 'hooks/useSnackbar';
import Snackbar from '@mui/material/Snackbar';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

export default function ContactModal({ contactObj, openModal, setOpenModal }) {
  const { name, setName, number, setNumber, id, handleInputChange, resetForm } = useContactForm();
  const { open, message, setOpen, setMessage, handleClose } = useSnackbar();
  const dispatch = useDispatch();
  const isEditing = useSelector(contactsSelectors.isEditing);

  useEffect(() => {
    setName(contactObj.name);
    setNumber(contactObj.number);
  }, [contactObj, setName, setNumber]);

  const handleModalClose = (event) => {
    if (event.target.name !== 'edit') {
      setOpenModal(false);
      resetForm();
      return;
    }
    if ((name.toLowerCase() === contactObj.name.toLowerCase()) && (number === contactObj.number)) {
      setMessage(`Please make changes to contact ${name} information or press Cancel to exit Edit Contact dialog.`);
      return setOpen();
    }
    dispatch(contactsOperations.editContact({ id: contactObj.id, name, number }));
    setMessage(`Contact ${name} information is successfully changed!`);
    setOpen();
    resetForm();
    setOpenModal(false);
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
          <LoadingButton startIcon={<EditIcon />} onClick={handleModalClose} name='edit' variant='contained' loading={isEditing}>Edit</LoadingButton>
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
  openModal: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired
};
