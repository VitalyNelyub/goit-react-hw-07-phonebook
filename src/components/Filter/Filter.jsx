import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice';

export default function Filter() {
  const dispatch = useDispatch();


  const filtration = e => {
    dispatch(filterContact(e.target.value))
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__title}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.filter__input}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={filtration}
        />
      </label>
    </div>
  );
}

Filter.propType = {
  handleFilterContacts: PropTypes.func.isRequired,
  filterContacts: PropTypes.func.isRequired,
};
