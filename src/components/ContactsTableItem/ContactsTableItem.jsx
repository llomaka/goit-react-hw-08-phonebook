import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import PropTypes from 'prop-types';

export default function ContactsTableItem({ contact, handleEdit, handleDelete }) {
  const isDeleting = useSelector(contactsSelectors.isDeleting);

  return (
    <>
      <TableCell component='th' scope='row'>
        <Typography paragraph>
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
          <LoadingButton startIcon={<DeleteIcon />} onClick={() => handleDelete(contact.id, contact.name)} variant='contained' loading={isDeleting}>Delete</LoadingButton>
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
