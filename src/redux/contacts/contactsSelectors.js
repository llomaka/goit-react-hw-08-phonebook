const contacts = state => state.contacts.value;
const isFetchingContacts = state => state.contacts.isFetchingContacts;
const isDeletingContact = state => state.contacts.isDeletingContact;

const contactsSelectors = {
  contacts,
  isFetchingContacts,
  isDeletingContact
};

export default contactsSelectors;
