import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from 'react-loader-spinner';

import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';

import s from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  function onChangeEmail(e) {
    setEmail(e.currentTarget.value);
  }
  function onChangePassword(e) {
    setPassword(e.currentTarget.value);
  }

  const btnActive = Boolean(email && password);
  const isLoading = useSelector(authSelectors.getIsLoadding);

  return (
    <>
      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" width={'5vw'} />
      ) : (
        <div className={s.container}>
          <h2>Sign In page</h2>

          <form onSubmit={onSubmit}>
            <label className={s.label}>
              Email
              <input
                className={s.input}
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={onChangeEmail}
              />
            </label>

            <label className={s.label}>
              Password
              <input
                className={s.input}
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
            </label>
            <button className={s.btn} disabled={!btnActive} type="submit">
              Sign In
            </button>
          </form>
        </div>
      )}
    </>
  );
}
