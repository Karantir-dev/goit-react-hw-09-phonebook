import { useDispatch, useSelector } from 'react-redux';

import defaultAvatar from './default-avatar.png';

import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  function onLogout() {
    dispatch(authOperations.logout);
  }

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
