// Import a library to help create a component
import React from 'react';
import { View,Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
        <View stlye={{ flex: 1}} >
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
