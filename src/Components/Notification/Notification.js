import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import authActions from '../../Redux/auth/auth-actions';
import authSelectors from '../../Redux/auth/auth-selectors';

import s from './Notification.module.css';

function Notification({ text, clearError }) {
  let showNotif = Boolean(text);

  if (showNotif) {
    setTimeout(() => {
      clearError('');
    }, 3000);
  }

  return (
    <CSSTransition in={showNotif} classNames={s} timeout={250} unmountOnExit>
      <div className={s.container}>
        <h3>Warning</h3>
        <p>{text}</p>
      </div>
    </CSSTransition>
  );
}

const mapStateToProps = state => ({
  text: authSelectors.getError(state),
});

const mapDispatchToProps = {
  clearError: authActions.registerError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
