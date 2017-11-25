const express = require('express');
const uid = require('uid');
const faker = require('faker');

const app = express();

app.get('/', (req, res) => {
    const arrResponse = [];
    for(let i = 0; i < 3; i++) {
        arrResponse.push({
            id: uid(),
            author: faker.internet.userName(),
            content: faker.lorem.paragraph(),
            image: faker.internet.avatar()
        });
    }
    res.send(arrResponse);
});

app.listen(3000, () => console.log('Server started!'));
