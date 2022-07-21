import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  'value': [],
  'isFetchingContacts': false,
  'isDeletingContact': false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteReduxContact(state, action) {
      state.value = state.value.filter(contact => contact.id !== action.payload);
    },
    clearContacts(state) {
      state.value = initialState.value;
    }
  },
  extraReducers: {
    [contactsOperations.getAllContacts.pending](state) {
      state.isFetchingContacts = true;
    },
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.value = action.payload;
      state.isFetchingContacts = false;
    },
    [contactsOperations.getAllContacts.rejected](state) {
      state.isFetchingContacts = false;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.value.push(action.payload);

    },
    [contactsOperations.editContact.fulfilled](state, action) {
      const editedItemIndex = state.value.findIndex(contact => contact.id === action.payload.id);
      state.value.splice(editedItemIndex, 1, action.payload);
    },
    [contactsOperations.deleteContact.pending](state) {
      state.isDeletingContact = true;
    },
    [contactsOperations.deleteContact.fulfilled](state) {
      state.isDeletingContact = false;
    },
    [contactsOperations.deleteContact.rejected](state) {
      state.isDeletingContact = false;
    },
  },
})

export const { getAllContacts, createContact, editContact, deleteReduxContact, clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
