import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login/Login';
import DetailsScreen from './Login/DetailsScreen';
import FormNote from './Login/FormNote';

const Routes = () => (
  <Router>
    <Scene key="root" >
      <Scene key="login" component={Login} title="Login"  hideNavBar={true}/>
      <Scene key="details" component={DetailsScreen} title="Detalhes" hideNavBar={true}/>
      <Scene key="formNote" component={FormNote} title="Nova Nota"/>
    </Scene>
  </Router>
);

export default Routes;