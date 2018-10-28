/**
 * Created by PhpStorm
 * Project p903_raect_native_slider_devsteam_mobi
 * User: Adisey
 * Date: 28.10.2018
 * Time: 20:21
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Container } from 'native-base';


type Props = {};
export default class Gallery extends Component<Props> {
    render() {
        return (
                <View style={styles.container}>
                    <Text>5555</Text>
                    {/*<Text>4444</Text>*/}
                    {/*<Text>3333</Text>*/}
                    {/*<Text>2222</Text>*/}
                    {/*<Text>1111</Text>*/}
                </View>
        );
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5ff4e',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});