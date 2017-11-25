import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

class LoadMoreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: 'abcd1', author: 'in', content: 'Aut autem laboriosam blanditiis aut.' },
                { id: 'abcd2', author: 'sint nihil qui', content: 'Dolores eveniet repellat excepturi. Deleniti sit voluptatum pariatur voluptas non id. Qui sapiente dolorem modi veniam. Ipsam asperiores culpa pariatur debitis.' },
                { id: 'abcd3', author: 'odio aliquid numquam', content: 'Inventore qui mollitia sed dolore odio ipsum quasi. Repudiandae praesentium perspiciatis culpa qui qui ut dignissimos dolorem eaque. Enim voluptatem quia odit accusamus qui in optio. Placeat aut dolorem velit quae provident quaerat rerum aperiam. Quis qui libero totam voluptatibus sit consequuntur autem accusantium.' },
                { id: 'abcd4', author: 'in aliquid mollitia', content: 'Nesciunt sapiente inventore eligendi quia beatae aut nesciunt reiciendis quod. Fugiat et eveniet. Itaque id animi consequatur culpa quo numquam qui. Sapiente possimus facere consequuntur dolor. Fuga aspernatur quas explicabo magni debitis ea quae. Aut tempore beatae in saepe aut sint dicta deserunt.' },
                { id: 'abcd5', author: 'hic', content: 'A et id non tenetur tenetur. Sed est consequatur reiciendis non. Minima libero et voluptatem maiores eaque voluptas magni animi. Odio quasi eum doloribus commodi sit natus et quaerat exercitationem. Quis nesciunt nisi consequatur. Quo qui quibusdam exercitationem error vero laboriosam qui tempora ea.' },
                { id: 'abcd6', author: 'quia laborum soluta', content: 'Vitae consequatur est suscipit porro. Quisquam qui incidunt. Aut error debitis rerum. Aut amet ea in suscipit dolor laboriosam laborum qui dolore.' },
                { id: 'abcd7', author: 'error est sequi', content: 'Temporibus aliquid eum. Consequatur quas voluptate. Neque sit pariatur enim qui nam. Voluptate consequatur rerum rerum cupiditate et. Error dignissimos delectus quos et quidem voluptas provident qui qui.' },
                { id: 'abcd8', author: 'in', content: 'Aut autem laboriosam blanditiis aut.' },
                { id: 'abcd9', author: 'sint nihil qui', content: 'Dolores eveniet repellat excepturi. Deleniti sit voluptatum pariatur voluptas non id. Qui sapiente dolorem modi veniam. Ipsam asperiores culpa pariatur debitis.' },
                { id: 'abcd10', author: 'odio aliquid numquam', content: 'Inventore qui mollitia sed dolore odio ipsum quasi. Repudiandae praesentium perspiciatis culpa qui qui ut dignissimos dolorem eaque. Enim voluptatem quia odit accusamus qui in optio. Placeat aut dolorem velit quae provident quaerat rerum aperiam. Quis qui libero totam voluptatibus sit consequuntur autem accusantium.' },
                { id: 'abcd11', author: 'in aliquid mollitia', content: 'Nesciunt sapiente inventore eligendi quia beatae aut nesciunt reiciendis quod. Fugiat et eveniet. Itaque id animi consequatur culpa quo numquam qui. Sapiente possimus facere consequuntur dolor. Fuga aspernatur quas explicabo magni debitis ea quae. Aut tempore beatae in saepe aut sint dicta deserunt.' },
                { id: 'abcd12', author: 'hic', content: 'A et id non tenetur tenetur. Sed est consequatur reiciendis non. Minima libero et voluptatem maiores eaque voluptas magni animi. Odio quasi eum doloribus commodi sit natus et quaerat exercitationem. Quis nesciunt nisi consequatur. Quo qui quibusdam exercitationem error vero laboriosam qui tempora ea.' },
                { id: 'abcd13', author: 'quia laborum soluta', content: 'Vitae consequatur est suscipit porro. Quisquam qui incidunt. Aut error debitis rerum. Aut amet ea in suscipit dolor laboriosam laborum qui dolore.' },
                { id: 'abcd14', author: 'error est sequi', content: 'Temporibus aliquid eum. Consequatur quas voluptate. Neque sit pariatur enim qui nam. Voluptate consequatur rerum rerum cupiditate et. Error dignissimos delectus quos et quidem voluptas provident qui qui.' },
                { id: 'abcd15', author: 'in', content: 'Aut autem laboriosam blanditiis aut.' },
                { id: 'abcd16', author: 'sint nihil qui', content: 'Dolores eveniet repellat excepturi. Deleniti sit voluptatum pariatur voluptas non id. Qui sapiente dolorem modi veniam. Ipsam asperiores culpa pariatur debitis.' },
                { id: 'abcd17', author: 'odio aliquid numquam', content: 'Inventore qui mollitia sed dolore odio ipsum quasi. Repudiandae praesentium perspiciatis culpa qui qui ut dignissimos dolorem eaque. Enim voluptatem quia odit accusamus qui in optio. Placeat aut dolorem velit quae provident quaerat rerum aperiam. Quis qui libero totam voluptatibus sit consequuntur autem accusantium.' },
                { id: 'abcd18', author: 'in aliquid mollitia', content: 'Nesciunt sapiente inventore eligendi quia beatae aut nesciunt reiciendis quod. Fugiat et eveniet. Itaque id animi consequatur culpa quo numquam qui. Sapiente possimus facere consequuntur dolor. Fuga aspernatur quas explicabo magni debitis ea quae. Aut tempore beatae in saepe aut sint dicta deserunt.' },
                { id: 'abcd19', author: 'hic', content: 'A et id non tenetur tenetur. Sed est consequatur reiciendis non. Minima libero et voluptatem maiores eaque voluptas magni animi. Odio quasi eum doloribus commodi sit natus et quaerat exercitationem. Quis nesciunt nisi consequatur. Quo qui quibusdam exercitationem error vero laboriosam qui tempora ea.' },
                { id: 'abcd20', author: 'quia laborum soluta', content: 'Vitae consequatur est suscipit porro. Quisquam qui incidunt. Aut error debitis rerum. Aut amet ea in suscipit dolor laboriosam laborum qui dolore.' },
                { id: 'abcd21', author: 'error est sequi', content: 'Temporibus aliquid eum. Consequatur quas voluptate. Neque sit pariatur enim qui nam. Voluptate consequatur rerum rerum cupiditate et. Error dignissimos delectus quos et quidem voluptas provident qui qui.' },
            ]
        }
    }
    render() {
        const { posts } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.author}>Author: {item.author}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
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
