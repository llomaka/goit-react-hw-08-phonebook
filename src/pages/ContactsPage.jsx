import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import Header from "components/Header";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactsTable from 'components/ContactsTable';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(contactsOperations.getAllContacts())});

  return (
    <>
      <Header text='Phonebook contacts'/>
      <ContactForm />
      <Filter />
      <ContactsTable />
    </>
  );
}
