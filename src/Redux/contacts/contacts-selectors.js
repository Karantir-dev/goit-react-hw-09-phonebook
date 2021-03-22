import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.allContacts;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getAllContacts,
  getFilter,
  getFilteredContacts,
};
export default contactsSelectors;
