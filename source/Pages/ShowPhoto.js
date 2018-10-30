import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../init/store';
import { Container, Text } from 'native-base';
// Components
// import { AppHeader, Gallery } from '../Components';


export default class Main extends Component {
    static navigationOptions = {
        title: '-----',
    };
    render() {
        const { navigate } = this.props.navigation;
        const _hidePhoto = () => {
            navigate('Main', { name: 'Jane' })
        };

        return (
            <Provider store={store}>
                <Container>
                    <Text
                        onPress={ _hidePhoto }
                    >Photo</Text>
                </Container>
            </Provider>
        );
    }
}

