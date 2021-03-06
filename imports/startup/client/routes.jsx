import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { App } from '../../ui/layouts/app';

// Accounts Pages
import { Login } from '../../ui/pages/accounts/login';
import { RecoverPassword } from '../../ui/pages/accounts/recover-password';
import { ResetPassword } from '../../ui/pages/accounts/reset-password';
import { Signup } from '../../ui/pages/accounts/signup';
import { VerifyEmail } from '../../ui/pages/accounts/verify-email';

import { Assets } from '../../ui/pages/assets';
import { AssetDetails } from '../../ui/pages/assets-details';
import { AccountDetails } from '../../ui/pages/accountDetails';

import { NotFound } from '../../ui/pages/not-found';
import { Index } from '../../ui/pages/index';


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="assets" path="/assets"
          component={ Assets } onEnter={ requireAuth } />
        <Route name="asset-details" path="/assets/:assetId"
          component={ AssetDetails } onEnter={ requireAuth } />
        <Route name="account" path="/account"
          component={ AccountDetails } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="verify-email" path="/verify-email/:token" component={ VerifyEmail } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
