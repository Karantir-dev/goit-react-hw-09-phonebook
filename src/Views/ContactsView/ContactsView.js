import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import AddContactForm from '../../Components/AddContactForm/AddContactForm';
import ContactsList from '../../Components/ContactsList/ContactsList';
import Filter from '../../Components/Filter/Filter';
import Loader from 'react-loader-spinner';

import contactsSelectors from '../../Redux/contacts/contacts-selectors';
import contactsOperations from '../../Redux/contacts/contacts-operations';

import s from './ContactsView.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>

        {this.props.loading && (
          <Loader
            className={s.loader}
            type="Oval"
            color="#00BFFF"
            width={'50px'}
            height={'50px'}
          />
        )}

        <AddContactForm />

        <Filter />

        <ContactsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
