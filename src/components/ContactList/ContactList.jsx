import ContactListItem from 'components/ContactListItem';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { filterSelector } from 'redux/filter';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.contacts);
  const filter = useSelector(filterSelector);
  const isFetching = useSelector(contactsSelectors.isFetchingContacts);
  const contactsList = useMemo(() =>
    contacts
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)
    ), [contacts, filter]);

  return (!isFetching && <ul>
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
