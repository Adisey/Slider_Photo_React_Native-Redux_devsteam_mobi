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


type Props = {};
export default class AppHeader extends Component<Props> {
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

