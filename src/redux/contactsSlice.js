import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from '../service/connectionsApi';

const initialState = {
  'value': [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.value = action.payload;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.value = action.payload;
    },
    [contactsOperations.editContact.fulfilled](state, action) {
      state.value = action.payload;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.value = action.payload;
    },
  },
})

export const { getAllContacts, createContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
