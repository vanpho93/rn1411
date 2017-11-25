import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

class ListSinger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singers: [
                { id: '123', name: 'Ti', image: '' },
                { id: '124', name: 'Teo', image: '' },
                { id: '125', name: 'Tun', image: '' },
            ]
        }
    }
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <FlatList 
                    data={this.state.singers}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name}</Text>
                            <Image
                                source={{ uri: 'http://f.imgs.vietnamnet.vn/2017/11/25/08/ong-nguyen-thien-nhan-viet-ve-co-che-dac-thu-phat-trien-tp-hcm-1-450x240.jpg' }}
                                style={{ width: 120, height: 40 }}
                            />
                        </View>
                    )}
                    keyExtractor={singer => singer.id}
                />
            </View>
        );
    }
}

// const { name, age } = person;


export default ListSinger;
// { this.state.singers.map(singer => <Text key={singer.id}>{singer.name}</Text>) }