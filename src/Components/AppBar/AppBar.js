import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import authSelectors from '../../Redux/auth/auth-selectors';

import s from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>

        {isAuthenticated && (
          <NavLink
            to="/contacts"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </nav>

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
