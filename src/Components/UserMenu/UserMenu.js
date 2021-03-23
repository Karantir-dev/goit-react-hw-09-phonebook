import { connect } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.png';

import s from './UserMenu.module.css';

function UserMenu({ onLogout, userName }) {
  return (
    <div className={s.container}>
      <p>Welcome, {userName}</p>

      <img src={defaultAvatar} alt="" width="32" />
      <button className={s.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
