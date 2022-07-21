import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@mui/material/TableCell';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';

export default function ContactsTableItem({ contact, handleEdit, handleDelete }) {
  const isDeleting = useSelector(contactsSelectors.isDeleting);

  return (
    <>
      <TableCell component='th' scope='row'>{contact.name}</TableCell>
      <TableCell>{contact.number}</TableCell>
      <TableCell align='right'>
        <ButtonGroup variant='contained' aria-label='edit/delete contact button group'>
          <Button startIcon={<EditIcon />} onClick={() => handleEdit(contact)}>Edit</Button>
          <LoadingButton startIcon={<DeleteIcon />} onClick={() => handleDelete(contact.id, contact.name)} variant='contained' loading={isDeleting}>Delete</LoadingButton>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
