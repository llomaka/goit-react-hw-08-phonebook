import { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/filter';
import { Table, TableBody, TableContainer, TableHead, TableRow, TablePagination, Paper, Snackbar } from '@mui/material';
import StyledTableCell from 'components/StyledTableCell';
import StyledTableRow from 'components/StyledTableRow';
import useSnackbar from 'hooks/useSnackbar';
import useContactForm from 'hooks/useContactForm';
import ContactModal from 'components/ContactModal';
import ContactsTableItem from 'components/ContactsTableItem';
import { useGetAllContactsQuery, useDeleteContactByIdMutation } from 'service/contactsApi';
import contactsApi from 'service/contactsApi';

export default function ContactsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [contact, setContact] = useState({});
  const filter = useSelector(filterSelector);
  const { data = [] } = useGetAllContactsQuery();
  const filteredContactsList = useMemo(() =>
    data
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
    ), [data, filter]);
  const { open, message, setMessage, handleClose } = useSnackbar();
  const { openModal, setOpenModal } = useContactForm();
  const [deleteContact] = useDeleteContactByIdMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsApi.util.resetApiState());
  }, [dispatch]);

  const handleEdit = (contact) => {
    setContact(contact);
    setOpenModal(true);
  };

  const handleDelete = (id, name) => {
    deleteContact(id);
    setMessage(`Contact ${name} is successfully deleted!`);
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
        component="div"
        count={filteredContactsList.length}
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
