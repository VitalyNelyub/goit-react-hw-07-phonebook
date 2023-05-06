import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialTestContacts } from './initials';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunks';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
  state.contacts.error = '';
};

const handleFulfilledCreate = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(action.payload);
  state.contacts.error = '';
};

const handleFulfilledDelete = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== action.payload
  );
  state.contacts.error = '';
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload.message;
};

const responseArray = [
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
];

const caseType = type => responseArray.map(e => e[type]);

const testSlice = createSlice({
  name: 'testContacts',
  initialState: initialTestContacts,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          // getContactsThunk.pending,
          // createContactsThunk.pending,
          // deleteContactsThunk.pending,
          ...caseType('pending')
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          // getContactsThunk.rejected,
          // createContactsThunk.rejected,
          // deleteContactsThunk.rejected,
          ...caseType('rejected')
        ),
        handleRejected
      );
  },
  reducers: {
    filterContacts: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.filter = action.payload;
    },
  },
});

export const contactsApi = testSlice.reducer;
export const { filterContacts } = testSlice.actions;
