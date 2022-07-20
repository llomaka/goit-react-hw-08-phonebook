import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import contactsSelector from 'redux/contactsSelectors';
import filterSelector from 'redux/filterSelectors';
import { getAllContacts } from 'redux/contactsOperations';
import styles from './ContactsTable.module.css';

export default function ContactsTable() {
  const { data = [], isError, error, isLoading, isSuccess } = useGetAllContactsQuery();
  const filter = useSelector(state => state.filter.value);
  const renderContactList = useMemo(() =>
    data
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
    ), [data, filter]);

  return (
    <div>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subheader}>Contacts</h2>
      {isError && (<p>An error occurred: {error}</p>)}
      {isLoading && <p>Loading...</p>}
      {isSuccess && <ContactList contacts={renderContactList} />}
    </div>
  );
};
