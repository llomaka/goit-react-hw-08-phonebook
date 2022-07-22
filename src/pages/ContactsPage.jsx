import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import ContactForm from "components/ContactForm";
import ContactsTable from 'components/ContactsTable';
import Typography from '@mui/material/Typography';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(contactsOperations.getAllContacts())});

  return (
    <>
      <Typography variant='h3' component='h1' align='center' gutterBottom mt={2}>Phonebook contacts</Typography>
      <ContactForm />
      <ContactsTable />
    </>
  );
}
