import { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/filter';
import { Table, TableBody, TableContainer, TableHead, TableRow, TablePagination, Paper, Snackbar, List, ListItem, ListItemText, Pagination, ButtonGroup, Button, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StyledTableCell from 'components/StyledTableCell';
import StyledTableRow from 'components/StyledTableRow';
import useSnackbar from 'hooks/useSnackbar';
import useContactForm from 'hooks/useContactForm';
import ContactModal from 'components/ContactModal';
import ContactsTableItem from 'components/ContactsTableItem';
import contactsApi, { useGetAllContactsQuery, useDeleteContactByIdMutation } from 'service/contactsApi';

export default function ContactsTable() {
  const [page, setPage] = useState(0);
  const [listPage, setListPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [contact, setContact] = useState({});
  const [deletedContact, setDeletedContact] = useState('');
  const filter = useSelector(filterSelector);
  const { data = [] } = useGetAllContactsQuery();
  const filteredContactsList = useMemo(() =>
    data
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
  ), [data, filter]);
  const { open, message, setMessage, handleClose } = useSnackbar();
  const { openModal, setOpenModal } = useContactForm();
  const [deleteContact, { isLoading, isSuccess, reset }] = useDeleteContactByIdMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsApi.util.resetApiState());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess && deletedContact !== '') {
      setMessage(`Contact ${deletedContact} is successfully deleted!`);
      setDeletedContact('');
      reset();
    }
  }, [isSuccess, setMessage, reset, setDeletedContact, deletedContact]);

  const handleEdit = (contact) => {
    setContact(contact);
    setOpenModal(true);
  };

  const handleDelete = (contactId, contactName) => {
    deleteContact(contactId);
    setDeletedContact(contactName);
    if (page > (Math.floor(filteredContactsList.length / rowsPerPage) - 1)) {
      setPage(0);
      return;
    }
    if (listPage > Math.floor(filteredContactsList.length / 10)) {
      setListPage(Math.floor(filteredContactsList.length / 10));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeListPage = (event, newPage) => {
    setListPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Table sx={{ minWidth: 480 }} aria-label='contacts table' size='small'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell align='right'>Edit/Delete Contact</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContactsList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => (
                <StyledTableRow key={item.id}>
                  <ContactsTableItem
                    contact={item}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component='div'
        count={filteredContactsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ display: { xs: 'none', md: 'block' } }}
      />
      <List sx={{ display: { xs: 'block', md: 'none' } }}>
        {filteredContactsList
          .slice((listPage-1) * 10, (listPage-1) * 10 + 10)
          .map(item => (
            <ListItem key={item.id}>
              <ListItemText>
                {item.name}: {item.number}
              </ListItemText>
              <ButtonGroup variant='contained' aria-label='edit/delete contact button group'>
                <Button onClick={() => handleEdit(item)} variant='outlined' aria-label='Edit Contact' ><EditIcon /></Button>
                <LoadingButton onClick={() => handleDelete(item.id, item.name)} variant='contained' loading={isLoading} aria-label='Delete Contact' ><DeleteIcon /></LoadingButton>
              </ButtonGroup>
            </ListItem>
          ))}
      </List>
      <Box my={2} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(filteredContactsList.length / 10)}
          page={listPage}
          onChange={handleChangeListPage}
        />
      </Box>
      <Snackbar autoHideDuration={1000} open={open} onClose={handleClose} message={message} />
      <ContactModal contactObj={contact} openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
