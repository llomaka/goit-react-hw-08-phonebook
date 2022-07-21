import { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useContactForm from 'hooks/useContactForm';

export default function ContactModal({ contactObj, openModal, handleModalClose, setOpenModal }) {
  const { name, setName, number, setNumber, id, handleInputChange } = useContactForm();

  useEffect(() => {
    setName(contactObj.name);
    setNumber(contactObj.number);
  }, [contactObj, setName, setNumber]);

  // const handleEdit = (contactObj) => {
  //   if ((name.toLowerCase() === contactObj.name.toLowerCase()) && (number === contactObj.number)) {
  //     setMessage(`Please make changes to contact ${name} information or press Cancel to exit Edit Contact dialog.`);
  //     return setOpen();
  //   }
  //   dispatch(contactsOperations.editContact(contactObj.id, name, number));
  //   setMessage(`Contact ${name} information is successfully changed!`);
  //   setOpen();
  //   resetForm();
  // };

  const handleClose = () => {
    setOpenModal(false);
    // handleModalClose();
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Contact Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id={id + 'name'}
            label='Full Name'
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
          <Button onClick={handleClose}>Edit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
