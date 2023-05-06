import axios from 'axios';

const BASE_URL = 'https://64527e01a2860c9ed40dd0a1.mockapi.io';

export const getContactsApi = async () => {
  const contacts = await axios.get(`${BASE_URL}/contacts/contacts`);
  return contacts.data;
};

export const createContactsApi = async contact => {
  const contacts = await axios.post(`${BASE_URL}/contacts/contacts`, {
    ...contact,
  });
  return contacts.data;
};

export const deleteContactsApi = async id => {
  const result = await axios.delete(`${BASE_URL}/contacts/contacts/${id}`);
  return result.data.id;
};


