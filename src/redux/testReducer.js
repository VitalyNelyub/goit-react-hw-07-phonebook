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

    // dispatch({ type: 'contacts', payload: dataContacts.data });
  };
};

// const testInitialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   filter: '',
// };

const testSlice = createSlice({
  name: 'testContacts',
  initialState: initialTestContacts,
  reducers: {
    fetchPending: (state, action) => {
      state.contacts.isLoading = true;
      console.log('Сработала загрузка');
    },
    fetchSuccess: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
      console.log('Запрос прошел, екшн сработал в редюсере');
    },
    fetchError: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload.message;
      console.log(action.payload.message);
    },
  },
});

export const contactsApi = testSlice.reducer
