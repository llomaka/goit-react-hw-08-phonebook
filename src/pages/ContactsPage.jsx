import ContactForm from "components/ContactForm";
import ContactsTable from 'components/ContactsTable';
import Typography from '@mui/material/Typography';
import Filter from 'components/Filter';

export default function ContactsPage() {
  return (
    <>
      <Typography variant='h3' component='h1' align='center' gutterBottom mt={2}>Phonebook contacts</Typography>
      <ContactForm />
      <Filter />
      <ContactsTable />
    </>
  );
}
