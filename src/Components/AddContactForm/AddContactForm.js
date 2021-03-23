import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputMask from 'react-input-mask';

import contactsOperations from '../../Redux/contacts/contacts-operations';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

import s from './AddContactForm.module.css';
import authActions from '../../Redux/auth/auth-actions';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name) {
      this.props.showWarning('Enter contact name.');
    } else if (!number) {
      this.props.showWarning('Enter contact number.');
    } else if (
      this.props.allContacts.some(({ name }) => name === this.state.name)
    ) {
      this.props.showWarning('This contact is already on the list.');
    } else {
      this.props.onAddContact(this.state);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { number, name } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.onSubmitForm}>
          <label className={s.label}>
            Name
            <input
              className={s.formInput}
              name="name"
              onChange={this.onChange}
              value={name}
            ></input>
          </label>

          <label className={s.label}>
            Number
            <InputMask
              className={s.formInput}
              type="tel"
              name="number"
              onChange={this.onChange}
              value={number}
              mask="+3\8(999) 999-99-99"
              maskChar={null}
            />
          </label>

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

AddContactForm.propTypes = {
  allContacts: PropTypes.array,
};

const mapStateToProps = state => ({
  allContacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
  showWarning: authActions.registerError,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
