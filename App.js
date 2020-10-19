/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from '../reducer/RootReducer';
import FirebaseConfig from 'firebase';
import ReduxThunk from 'redux-thunk';
import HandleRouting from '../src/Router';

let store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
class App extends React.Component {
  componentWillMount() {
    FirebaseConfig.initializeApp({
      apiKey: 'AIzaSyDHcC5mj0ktllIRfN9KilNrg48DnBQX7-w',
      authDomain: 'authentication-16fe9.firebaseapp.com',
      databaseURL: 'https://authentication-16fe9.firebaseio.com',
      projectId: 'authentication-16fe9',
      storageBucket: 'authentication-16fe9.appspot.com',
      messagingSenderId: '484096541575',
      appId: '1:484096541575:web:76185277d109a80251c922',
      measurementId: 'G-D9S102MN1J',
    });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <HandleRouting />
        </View>
      </Provider>
    );
  }
}
export default App;
