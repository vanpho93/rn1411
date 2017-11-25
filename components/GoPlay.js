import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GoPlay extends Component {
    render() {
        const { author, content } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.author}>{author}</Text>
                <Text>{content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#705697',
        paddingTop: 15,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    author: {
        color: 'white',
        fontSize: 20
    }
});

export default GoPlay;
