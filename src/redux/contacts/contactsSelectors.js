const contacts = state => state.contacts.value;
const isFetchingContacts = state => state.contacts.isFetchingContacts;
const isCreating = state => state.contacts.isCreating;
const isEditing = state => state.contacts.isEditing;
const isDeleting = state => state.contacts.isDeleting;

const contactsSelectors = {
  contacts,
  isFetchingContacts,
  isCreating,
  isEditing,
  isDeleting
};

export default contactsSelectors;
