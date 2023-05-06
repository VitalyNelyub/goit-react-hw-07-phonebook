import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import css from './ContactForm/ContactForm.module.css';
import { useSelector } from 'react-redux';
import { selectLoader } from 'redux/selectors';

export default function App() {
  const loader = useSelector(selectLoader);

  return (
    <div className={css.phonebook}>
      <div className={css.form__contact}>
        <h1 className={css.form__title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.form__filter}>
        <div className={css.form__loader}>
          <h2>Contacts</h2>
          {loader && <Loader />}
        </div>
        <Filter />
        <ul>
          <ContactList />
        </ul>
      </div>
    </div>
  );
}
