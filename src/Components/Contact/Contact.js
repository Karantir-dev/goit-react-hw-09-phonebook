import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../../Redux/contacts/contacts-operations';

import s from './Contact.module.css';
import icon from '../../icons.svg';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(contactsOperations.deleteContact(contact.id));
  }

  return (
    <li className={s.listItem}>
      <span className={s.span}>{contact.name}</span>
      <span className={s.span}>{contact.number}</span>

      <button className={s.btn} type="button" onClick={onDelete}>
        <img className={s.svg} src={icon} alt="" />
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
};
