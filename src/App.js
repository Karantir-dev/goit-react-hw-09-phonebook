import { connect } from 'react-redux';
import { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createPortal } from 'react-dom';

import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from 'react-loader-spinner';
import Notification from './Components/Notification/Notification';

import authOperations from './Redux/auth/auth-operations';

import s from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomeView = lazy(() =>
  import('./Views/HomeView/HomeView' /* webpackChunkName: "HomeView"*/),
);
const RegisterView = lazy(() =>
  import(
    './Views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView"*/
  ),
);
const LoginView = lazy(() =>
  import('./Views/LoginView/LoginView' /* webpackChunkName: "LoginView"*/),
);
const ContactsView = lazy(() =>
  import(
    './Views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView"*/
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const loader = (
      <Loader className={s.loader} type="Oval" color="#00BFFF" width={'5vw'} />
    );

    return (
      <div className={s.container}>
        <AppBar />

        <Suspense fallback={loader}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              restricted
              path="/register"
              redirectTo="/"
              component={RegisterView}
            />
            <PublicRoute
              restricted
              path="/login"
              redirectTo="/"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
        {createPortal(<Notification />, document.getElementById('portal'))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
