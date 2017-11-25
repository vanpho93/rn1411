import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native';
import { getMorePost } from '../api/getMorePost';

class LoadMoreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isRefreshing: false
        }
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        getMorePost()
        .then(data => this.setState({ posts: data }));
    }

    onRefresh() {
        this.setState({ isRefreshing: true });
        // setTimeout(() => this.setState({ isRefreshing: false }), 3000);
        getMorePost()
        .then(data => {
            setTimeout(() => {
                this.setState({ posts: data.concat(this.state.posts) });
                this.setState({ isRefreshing: false });
            }, 1500);
        });
    }

    render() {
        const { posts, isRefreshing } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    refreshControl={
                        <RefreshControl 
                            refreshing={isRefreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                    data={posts}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('GoPlay', { author: item.author, content: item.content })}>
                            <Text style={styles.author}>Author: {item.author}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 15,
        paddingLeft: 10
    },
    itemContainer: {
        margin: 5
    },
    author: {
        color: '#2060D1',
        fontSize: 20
    },
    content: {
        color: 'gray',
        padding: 10
    }
});

export default LoadMoreList;
