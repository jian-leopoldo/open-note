import React from 'react';
import { Router, Scene, Tabs} from 'react-native-router-flux'
import Login from './Login/Login';
import DetailsScreen from './Login/DetailsScreen';
import FormNote from './Login/FormNote';
import uploadImage from './Login/uploadImage';
import { IconPaper, IconAdd, IconPerson } from './shared/iconPaper';
import currentUser from './Login/currentUser';




const Routes = () => (
  <Router>
    <Scene key="root" >
        <Scene key="login" component={Login} title="Login"  hideNavBar={true}/>
        <Tabs key='tabbar' tabs showLabel={false} tabBarPosition='bottom' activeBackgroundColor='#111' inactiveBackgroundColor='#111'>
          <Scene key="details" icon={IconPaper} component={DetailsScreen} title="Detalhes" hideNavBar={true}/>
          <Scene key="formNote" icon={IconAdd} component={FormNote} title="Nova Nota"/>
          <Scene key="uploadImage" component={uploadImage} title="Upload Image"  hideNavBar={true}/>
          <Scene key="user" icon={IconPerson} component={currentUser} title="UsuarioAtual"  hideNavBar={true}/>
        </Tabs>
    </Scene>
  </Router>
);

export default Routes;