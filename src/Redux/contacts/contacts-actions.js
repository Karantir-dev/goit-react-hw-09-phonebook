import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('ADD_CONTACT_REQUEST');
const addContactSucсess = createAction('ADD_CONTACT_SUCCESS');
const addContactError = createAction('ADD_CONTACT_ERROR');

const deleteContactRequest = createAction('DELETE_CONTACT_REQUEST');
const deleteContactSucсess = createAction('DELETE_CONTACT_SUCCESS');
const deleteContactError = createAction('DELETE_CONTACT_ERROR');

const fetchContactsRequest = createAction('FETCH_CONTACTS_REQUEST');
const fetchContactsSucсess = createAction('FETCH_CONTACTS_SUCCESS');
const fetchContactsError = createAction('FETCH_CONTACTS_ERROR');

const changeFilter = createAction('CHANGE_FILTER');

export default {
  addContactRequest,
  addContactSucсess,
  addContactError,
  deleteContactRequest,
  deleteContactSucсess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSucсess,
  fetchContactsError,
  changeFilter,
};
