import { combineReducers, createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
import authActions from '../auth/auth-actions';

const allContacts = createReducer([], {
  [contactsActions.fetchContactsSucсess]: (_, { payload }) => payload,
  [contactsActions.addContactSucсess]: (prevState, { payload }) => {
    return [...prevState, payload];
  },
  [contactsActions.deleteContactSucсess]: (prevState, { payload }) => {
    return prevState.filter(({ id }) => {
      return id !== payload;
    });
  },
  [authActions.logOutSuccess]: () => [],
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSucсess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSucсess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ allContacts, filter, loading });
