/**
 * Created by PhpStorm
 * Project p903_raect_native_slider_devsteam_mobi
 * User: Adisey
 * Date: 28.10.2018
 * Time: 20:21
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
// import { StyleSheet, Text, View } from 'react-native';
import { Container, List, ListItem, Left, Right, Text, Body } from 'native-base';
// Actions
import { photosActions } from '../bus/photos/actions';

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...photosActions }, dispatch),
    };
};

class Gallery extends Component {
    componentDidMount () {
        console.log(`componentDidMount -> -> ` );
        const { actions } = this.props;
        console.log(`componentDidMount -> 'actions' -> `, actions );
        actions.fetchPhotosAsync();
    }
    render() {
        const {photos} = this.props;
        console.log(` -> "photos" -> `, photos);
        return (
            <Container>
                <List>
                    { photos.map((item, index) => {
                        return (
                            <ListItem key = {item.get('id')}>
                                <Left>
                                    <Text>{item.get('id')}</Text>
                                </Left>
                                <Body>
                                <Text>777</Text>
                                </Body>
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Gallery);