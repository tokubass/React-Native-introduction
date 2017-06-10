import React, { Component } from 'react';
import { View  } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };
    
    componentWillMount(){
        //console.log('componentWillMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums : response.data }));
    }

    renderAlbums(){
        // AlbumDetailの引数propsにAlbumのstateを渡す album={album}
        return this.state.albums.map(album =>
           <AlbumDetail key={album.title} album={album} />
        );
    }
    
    render () {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    };
};

export default AlbumList;
