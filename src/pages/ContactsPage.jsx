import ContactForm from "components/ContactForm";
import ContactsTable from 'components/ContactsTable';
import {Typography, Box} from '@mui/material';
import Filter from 'components/Filter';

export default function ContactsPage() {
  return (
    <Box>
      <Typography variant='h3' component='h1' align='center' gutterBottom mt={2}>Phonebook contacts</Typography>
      <ContactForm />
      <Filter />
      <ContactsTable />
    </Box>
  );
}
