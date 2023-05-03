import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from './initials';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContact: (state, action) => {
        state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
