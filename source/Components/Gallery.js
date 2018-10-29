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
import { Content, Card, CardItem, Left, Right, Text, Body, Thumbnail } from 'native-base';
// Actions
import { photosActions } from '../bus/photos/actions';
// Styles
import { styles } from './styles';

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators ({ ...photosActions }, dispatch),
    };
};

class Gallery extends Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.fetchPhotosAsync ();
    }

    render() {
        const { photos } = this.props;
        return (
            <Content style={styles.galleryContent}>
                {photos.map ((item, index) => {
                    return (
                        <Card
                            key={item.get ('id')}

                        >
                            <CardItem header>
                                <Text style={styles.textHeader}>{item.get ('description')}</Text>
                            </CardItem>
                            <CardItem
                                cardBody
                                style={styles.cardBody}
                                button onPress={() => alert(`Photo Id - ${item.get ('id')}`)}
                            >
                                <Thumbnail
                                    square
                                    large
                                    source={{ uri: item.getIn (['urls', 'thumb']) }}
                                    style={styles.thumbImage}
                                />
                            </CardItem>
                            <CardItem footer>
                                <Text style={styles.textFooter}>{item.getIn (['user', 'name'])}</Text>
                            </CardItem>

                        </Card>
                    )
                })}
            </Content>
        );
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps,
) (Gallery);

