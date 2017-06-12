import React, { Component } from 'react';
import { View} from 'react-native';
import { Header,Button,Spinner,Card,CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

import { firebaseConfig } from './config/api.json';


class App extends Component {
  state = { loggedIn: null }; 
  
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }else{
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (
        <View style={{ flexDirection: 'row' }}>
        <Button onPress={() => firebase.auth().signOut() }>
          Log Out
        </Button>
        </View>
      );
    case false:
      return  <LoginForm />
    default:
      return <Spinner size="large" />;
    }
  }
  
  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
