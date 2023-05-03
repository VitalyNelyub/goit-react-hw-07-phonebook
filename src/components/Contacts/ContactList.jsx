import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from '../Contacts/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import { selectContacts, selectFilter } from 'redux/selectors';
// import getContactsApi from 'service/fetchContacts';
// import { deleteContact } from 'redux/reducers';

export default function ContactList() {
  const dispatch = useDispatch();

  const contactsList = useSelector(selectContacts);
  console.log(contactsList)
  const filteredContacts = useSelector(selectFilter);
  console.log(filteredContacts)

  const delContact = contact => {
    dispatch(deleteContact(contact.id));
    Notify.failure('The contact was successfully deleted');
  };

  const onFilter = contactsList.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filteredContacts)
  );

  return onFilter.length > 0 ? (
    onFilter.map(contact => (
      <li key={contact.id} className={css.contact__item}>
        <img
          src={'https://cdn-icons-png.flaticon.com/512/3455/3455271.png'}
          alt={contact.name}
          width={40}
          height={40}
        />
        <p>{contact.name}:</p>
        <span>{contact.phone.substr(0, 12)}</span>
        <button
          type="button"
          onClick={() => delContact(contact)}
          className={css.delete__btn}
          id={contact.id}
        >
          Delete
        </button>
      </li>
    ))
  ) : (
    <p className={css.tag}>No contacts</p>
  );
}

ContactList.propType = {
  filteredContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
