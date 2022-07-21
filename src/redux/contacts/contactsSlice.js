import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  'value': [],
  'isFetchingContacts': false,
  'isCreating': false,
  'isEditing': false,
  'isDeleting': false,
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
    [contactsOperations.createContact.pending](state) {
      state.isCreating = true;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.value.push(action.payload);
      state.isCreating = false;
    },
    [contactsOperations.createContact.rejected](state) {
      state.isCreating = false;
    },
    [contactsOperations.editContact.pending](state) {
      state.isEditing = true;
    },
    [contactsOperations.editContact.fulfilled](state, action) {
      const editedItemIndex = state.value.findIndex(contact => contact.id === action.payload.id);
      state.value.splice(editedItemIndex, 1, action.payload);
      state.isEditing = false;
    },
    [contactsOperations.editContact.rejected](state) {
      state.isEditing = false;
    },
    [contactsOperations.deleteContact.pending](state) {
      state.isDeleting = true;
    },
    [contactsOperations.deleteContact.fulfilled](state) {
      state.isDeleting = false;
    },
    [contactsOperations.deleteContact.rejected](state) {
      state.isDeleting = false;
    },
  },
})

export const { getAllContacts, createContact, editContact, deleteReduxContact, clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
