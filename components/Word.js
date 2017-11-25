import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import icon from '../images/a.png';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, txtUsername: '' };
    }
    render() {
        return (
            <View style={{ padding: 20 }}>
                <Text>{this.state.value}</Text>
                <Image source={icon}/>
                <Image
                    source={{ uri: 'https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png' }}
                    style={{ width: 50, height: 50 }}
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.txtUsername}
                    onChangeText={text => this.setState({ txtUsername: text })}    
                />
                <TouchableOpacity onPress={() => this.setState({ value: this.state.value + 1 })}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
                <Text>{this.state.txtUsername}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: { backgroundColor: '#DFDFDF', padding: 10, borderRadius: 5, margin: 5 }
})

export default Word;
