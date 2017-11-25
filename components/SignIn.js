import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SignIn extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.author}>Sign In Component</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigate('GoPlay')}>
                    <Text style={styles.buttonText}>Switch to GoPlay</Text>
                </TouchableOpacity>
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
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#705697'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    }
});

export default SignIn;
