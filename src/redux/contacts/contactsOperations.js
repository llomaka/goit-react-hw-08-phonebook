import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllContacts = createAsyncThunk('getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const createContact = createAsyncThunk('createContact', async (contactObject) => {
  try {
    const { data } = await axios.post('/contacts', contactObject);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const editContact = createAsyncThunk('editContact', async ({id, name, number}) => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`, { name, number });
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async (contactId) => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const operations = {
  getAllContacts,
  createContact,
  editContact,
  deleteContact
};
export default operations;
