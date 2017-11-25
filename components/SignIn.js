import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.author}>Sign In Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 15,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    author: {
        color: '#2060D1',
        fontSize: 20
    }
});

export default SignIn;
