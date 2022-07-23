import { Button, ButtonGroup, TableCell, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteContactByIdMutation } from 'service/contactsApi';
import PropTypes from 'prop-types';

export default function ContactsTableItem({ contact, handleEdit, handleDelete }) {
  const [, { isLoading }] = useDeleteContactByIdMutation();

  return (
    <>
      <TableCell component='th' scope='row'>
        <Typography>
          {contact.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {contact.number}
        </Typography>
      </TableCell>
      <TableCell align='right'>
        <ButtonGroup variant='contained' aria-label='edit/delete contact button group'>
          <Button startIcon={<EditIcon />} onClick={() => handleEdit(contact)} variant='outlined'>Edit</Button>
          <LoadingButton startIcon={<DeleteIcon />} onClick={() => handleDelete(contact.id, contact.name)} variant='contained' loading={isLoading}>Delete</LoadingButton>
        </ButtonGroup>
      </TableCell>
    </>
  );
}

ContactsTableItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};
