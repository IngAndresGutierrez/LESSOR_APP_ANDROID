/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import store from './data/store';
import { persistStore } from 'redux-persist'
import { Provider }  from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {YellowBox,StyleSheet,Button,Image,View,Text} from 'react-native';
import Filter from './components/filter';
import MainProperties from './components/properties';
import Login from './components/login';


YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Remote debugger'
]);


const RootStack = createStackNavigator(
  {
    Home: Filter,
    Main: MainProperties,
  },
  {
    initialRouteName: 'Home',
  }
);

const LoginStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: 'Login',
  }
);


class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/logo.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Inicio"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = createDrawerNavigator({
  Buscar: {
    screen: RootStack,
  },
  Login: {
    screen: LoginStack,
  },
});

let persistor = persistStore(store);

class App extends Component{
  render() {
    return(<Provider store={store}>  
            <PersistGate loading={null} persistor={persistor}>
               <MyApp />
            </PersistGate>
          </Provider>
          )
  }
}

export default App;