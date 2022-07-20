import ContactListItem from 'components/ContactListItem';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import contactsSelector from 'redux/contactsSelectors';
import filterSelector from 'redux/filterSelectors';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const contactsList = useMemo(() =>
    contacts
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
    ), [contacts, filter]);

  return (
    <ul>
      {contactsList.map(contact =>
      (<li
        key={contact.id}
        className={styles.item}
      >
        <ContactListItem contact={contact} />
      </li>)
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};
