import axios from 'axios';

// axios.defaults.baseURL =
//   'https://64527e01a2860c9ed40dd0a1.mockapi.io';

// export default function getContactsApi() {
//   const contacts = axios.get(
//     'https://contacts.64527e01a2860c9ed40dd0a1.mockapi.io/contacts/contacts'
//   );
//   console.log(contacts.then(data => console.log(data)));
//   return contacts;
// }

export default function getContactsApi() {
  const contacts = axios.get('https://64527e01a2860c9ed40dd0a1.mockapi.io/contacts/contacts');
//   console.log(contacts.data);
  return contacts;
}

// getContactsApi().then(data => console.log(data));
// console.log(contacts);
// getContactsApi().then(data => {
//   console.log(data.data);
// });
