import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../../Redux/contacts/contacts-operations';

import s from './Contact.module.css';
import icon from '../../icons.svg';

function Contact({ contact, onDelete }) {
  return (
    <li className={s.listItem}>
      <span className={s.span}>{contact.name}</span>
      <span className={s.span}>{contact.number}</span>

      <button
        className={s.btn}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        <img className={s.svg} src={icon} alt="" />
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

const mapDispatchToProps = {
  onDelete: contactsOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
