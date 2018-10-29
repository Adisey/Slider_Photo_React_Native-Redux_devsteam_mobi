import React, { Component } from 'react';
// Components
import { Container, Header, Title, Body, Left, Right, } from 'native-base';
// Styles
// import { styles } from './styles';

export default class AppHeader extends Component{
    render() {
        return (
                <Header>
                    <Left/>
                    <Body>
                        <Title>Gallery</Title>
                    </Body>
                    <Right/>
                </Header>
        );
    }
}

