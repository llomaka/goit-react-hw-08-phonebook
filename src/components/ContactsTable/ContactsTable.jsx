import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { contactsOperations } from 'redux/contacts';
import { deleteReduxContact } from 'redux/contacts/contactsSlice';
import { filterSelector } from 'redux/filter';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Snackbar from '@mui/material/Snackbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useSnackbar from 'hooks/useSnackbar';
import useContactForm from 'hooks/useContactForm';
import ContactModal from 'components/ContactModal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ContactsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [contact, setContact] = useState({});
  const filter = useSelector(filterSelector);
  const contacts = useSelector(contactsSelectors.contacts);
  const filteredContacstList = useMemo(() =>
    contacts
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
    ), [contacts, filter]);
  const dispatch = useDispatch();
  const { open, message, setOpen, setMessage, handleClose } = useSnackbar();
  const { openModal, setOpenModal } = useContactForm();

  const handleEdit = (contact) => {
    setContact(contact);
    setOpenModal(true);
  };

  const handleDelete = (id, name) => {
    dispatch(contactsOperations.deleteContact(id));
    dispatch(deleteReduxContact(id));
    setMessage(`Contact ${name} is successfully deleted!`);
    setOpen();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 480 }} aria-label='contacts table' size='small'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell align='right'>Edit/Delete contact</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacstList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => (
                <StyledTableRow key={item.id}>
                  <TableCell component='th' scope='row'>{item.name}</TableCell>
                  <TableCell>{item.number}</TableCell>
                  <TableCell align='right'>
                    <ButtonGroup variant='contained' aria-label='edit/delete contact button group'>
                      <Button startIcon={<EditIcon />} onClick={() => handleEdit(item)}>Edit</Button>
                      <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(item.id, item.name)}>Delete</Button>
                    </ButtonGroup>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={filteredContacstList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose} message={message} />
      <ContactModal contactObj={contact} openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
