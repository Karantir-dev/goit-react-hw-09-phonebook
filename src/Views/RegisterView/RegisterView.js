import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import Loader from 'react-loader-spinner';

import Notification from '../../Components/Notification/Notification';
import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';

import s from './RegisterView.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warningShown, setWarningShown] = useState(false);

  const dispatch = useDispatch();

  const isLoading = useSelector(authSelectors.getIsLoadding);

  const onSubmit = e => {
    e.preventDefault();
    if (password.length < 7) {
      setWarningShown(true);

      setTimeout(() => {
        setWarningShown(false);
      }, 3000);
    } else {
      dispatch(authOperations.register({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    }
  };

  const onChangeName = e => {
    setName(e.currentTarget.value);
  };
  const onChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const btnActive = Boolean(name && email && password);

  return (
    <>
      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" width={'5vw'} />
      ) : (
        <div className={s.container}>
          <h2>Registration page</h2>

          <form onSubmit={onSubmit}>
            <label className={s.label}>
              Name
              <input
                className={s.input}
                type="name"
                name="name"
                placeholder="Alexander Repeta"
                value={name}
                onChange={onChangeName}
              />
            </label>

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
              Register
            </button>
          </form>
        </div>
      )}

      {createPortal(
        <Notification
          show={warningShown}
          text={'Password must be at least 7 characters.'}
        />,
        document.getElementById('portal'),
      )}
    </>
  );
}
