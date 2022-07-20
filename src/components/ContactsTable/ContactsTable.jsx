import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {contactsSelectors} from 'redux/contacts';
import {filterSelector} from 'redux/filter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ContactsTable() {
  const filter = useSelector(filterSelector);
  const contacts = useSelector(contactsSelectors.contacts);
  const filteredContacstList = useMemo(() =>
    contacts
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
    ), [contacts, filter]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredContacstList.map(contact => (
            <TableRow
              key={contact.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{contact.name}</TableCell>
              <TableCell>{contact.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
