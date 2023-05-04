import { createSlice } from '@reduxjs/toolkit';
import getContactsApi from 'service/fetchContacts';
import { initialTestContacts } from './initials';

export const contactsApiReducer = () => {
  return async dispatch => {
    try {
      dispatch(testSlice.actions.fetchPending());
      const dataContacts = await getContactsApi();
      dispatch(testSlice.actions.fetchSuccess(dataContacts.data));
    } catch (error) {
      dispatch(testSlice.actions.fetchError(error));
    }
  };
};

export const createContactApi = newContact => {
  return async dispatch => {

    try {
      dispatch(testSlice.actions.createContact(newContact));
    } catch (error) {
      console.log('Ошибка в добавлении новая');
    }
  };
};

export const deleteContactApi = id => {
  return async dispatch => {
    try {
      dispatch(testSlice.actions.deleteContact(id));
    } catch (error) {
      console.log(error);
      //   dispatch(testSlice.actions.fetchError(error));
    }
  };
};

export const filterContacts = (value) => {
  return async dispatch => {

    try {
      dispatch(testSlice.actions.filterContacts(value));
    } catch (error) {
      console.log(error);
    }
  };
};

const testSlice = createSlice({
  name: 'testContacts',
  initialState: initialTestContacts,
  reducers: {
    fetchPending: state => {
      state.contacts.isLoading = true;
    //   console.log('Сработала загрузка');
    },
    fetchSuccess: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    //   console.log('Запрос прошел, екшн сработал в редюсере');
    },
    fetchError: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload.message;
      console.log(action.payload.message);
    },
    createContact: (state, action) => {
      //   state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      //   state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      //   state.contacts.isLoading = false;
      state.contacts.filter = action.payload;
    },
  },
});

export const contactsApi = testSlice.reducer;
