import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/Incidents/NewIncident';
import EditIncident from './pages/Incidents/EditIncident';
import EditOng from './pages/EditOng';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profiles" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
        <Route path="/incidents/edit" component={EditIncident} />
        <Route path="/ongs/edit" component={EditOng} />
      </Switch>
    </BrowserRouter>
  );
}
