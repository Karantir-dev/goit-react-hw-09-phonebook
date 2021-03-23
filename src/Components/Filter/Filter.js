import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsActions from '../../Redux/contacts/contacts-actions';

import s from './Filter.module.css';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

function Filter({ value, onChangeFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        name="filter"
        onChange={onChangeFilter}
        value={value}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
