import React, { Component } from 'react';
import { View} from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

import { firebaseConfig } from './config/api.json';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }
    render () {
        return (
            <View>
              <Header headerText="Authentication"/>
              <LoginForm />
            </View>
        );
    }
}


export default App;
