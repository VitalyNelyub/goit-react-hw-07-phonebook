import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from '../Contacts/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContactsThunk, getContactsThunk } from 'redux/thunks';


export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contactsList = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilter);

  const delContact = id => {
    dispatch(deleteContactsThunk(id));
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
        <p>{contact.createdAt.substr(0, 7)}</p>
        <button
          type="button"
          onClick={() => delContact(contact.id)}
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
