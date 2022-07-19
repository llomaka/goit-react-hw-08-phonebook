import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  'value': [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      console.log(action.payload);
      state.value = action.payload;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.value.push(action.payload);

    },
    [contactsOperations.editContact.fulfilled](state, action) {
      // state.value = action.payload;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.value = state.value.filter(contact => contact.id !== action.payload);
    },
  },
})

export const { getAllContacts, createContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
