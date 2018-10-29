/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Body, Left, Right, } from 'native-base';

// Components

export default class AppHeader extends Component{
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Gallery</Title>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );
    }
}

