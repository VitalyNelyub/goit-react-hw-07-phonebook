import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import css from './ContactForm/ContactForm.module.css';

export default function App() {
  return (
    <div className={css.phonebook}>
      <div  className={css.form__contact}>
        <h1 className={css.form__title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div  className={css.form__filter}>
        <h2>Contacts</h2>
        <Filter />
        <ul>
          <ContactList />
        </ul>
      </div>
    </div>
  );
}
