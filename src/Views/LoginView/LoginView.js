import { Component } from 'react';
import { connect } from 'react-redux';

import authOperations from '../../Redux/auth/auth-operations';

import s from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { email, password } = this.state;
    const btnActive = Boolean(email && password);

    return (
      <div className={s.container}>
        <h2>Sign In page</h2>

        <form onSubmit={this.onSubmit}>
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={this.onChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </label>
          <button className={s.btn} disabled={!btnActive} type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
