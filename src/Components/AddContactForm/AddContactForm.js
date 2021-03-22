import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import InputMask from 'react-input-mask';
import Notification from '../Notification/Notification';

import contactsOperations from '../../Redux/contacts/contacts-operations';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

import s from './AddContactForm.module.css';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [warningShown, setWarningShown] = useState(false);
  const [textNotification, setTextNotification] = useState('');

  const dispatch = useDispatch();

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  function onChangeName(e) {
    setName(e.currentTarget.value);
  }

  function onChangeNumber(e) {
    setNumber(e.currentTarget.value);
  }

  function showWarning(text) {
    setWarningShown(true);
    setTextNotification(text);

    setTimeout(() => {
      setWarningShown(false);
    }, 3000);
  }

  function onSubmitForm(e) {
    e.preventDefault();
    const contactName = name;

    if (!name) {
      showWarning('Enter contact name.');
    } else if (!number) {
      showWarning('Enter contact number.');
    } else if (allContacts.some(({ name }) => name === contactName)) {
      showWarning('This contact is already on the list.');
    } else {
      dispatch(contactsOperations.addContact({ name, number }));

      setName('');
      setNumber('');
    }
  }

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label className={s.label}>
          Name
          <input
            className={s.formInput}
            name="name"
            onChange={onChangeName}
            value={name}
          ></input>
        </label>

        <label className={s.label}>
          Number
          <InputMask
            className={s.formInput}
            type="tel"
            name="number"
            onChange={onChangeNumber}
            value={number}
            mask="+3\8(999) 999-99-99"
            maskChar={null}
          />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>

      {createPortal(
        <Notification text={textNotification} show={warningShown} />,
        document.getElementById('portal'),
      )}
    </>
  );
}
