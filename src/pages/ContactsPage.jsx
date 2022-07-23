import ContactForm from "components/ContactForm";
import ContactsTable from 'components/ContactsTable';
import { Typography, Box } from '@mui/material';
import Filter from 'components/Filter';

export default function ContactsPage() {
  return (
    <Box>
      <Typography variant='h4' component='h1' align='center' gutterBottom mt={2}>Phonebook Contacts</Typography>
      <ContactForm />
      <Filter />
      <ContactsTable />
    </Box>
  );
}
