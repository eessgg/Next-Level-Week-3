import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing'
import OrphanagesMap from './screens/OrphanagesMap'
import Orphanage from './screens/Orphanage'
import CreateOrphanage from './screens/CreateOrphanage'
import DoneScreen from './screens/DoneScreen'
import LoginScreen from './screens/Login'
import SignInScreen from './screens/SignIn'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/done" component={DoneScreen} />

        <Route path="/login" component={LoginScreen} />
        <Route path="/signin" component={SignInScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;