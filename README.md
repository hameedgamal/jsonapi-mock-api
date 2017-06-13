# Mock RESTful Api server
A RESTful Api following JSON:api (A SPECIFICATION FOR BUILDING APIS IN JSON) using Node.js

## Built using
- Node.js
- Yarn || npm
- json-server
- json-api-serializer

## Installation
```bash
$ yarn install
```

## Running Development Server
All what you need is
```bash
$ node server.js
```
your server will be running under `http://localhost:3000/`


## Usage
This project is built on top of [json-server](https://github.com/typicode/json-server) & [json-api-serializer](https://github.com/danivek/json-api-serializer), you can refer to those projects documentation to find out how you can customize it for your need.

`server.js` file is the main file that contains the setup following [this section](https://github.com/typicode/json-server#module) of json-server documentation

### Example how you can register your resources types
Following [json-api-serializer](https://github.com/danivek/json-api-serializer) doumentation

```javascript
const JSONAPISerializer = require('json-api-serializer');
const Serializer = new JSONAPISerializer();

Serializer.register('users', {
    id: 'id', // The attributes to use as the reference. Default = 'id'.
});

Serializer.register('articles', {
    id: 'id', // The attributes to use as the reference. Default = 'id'.
    relationships: {
        comments: {
            type: 'comment'
        }
    }
});

Serializer.register('comment', {
  id: '_id',
});
```

### Data
`db.json` that file contains a json object that represent the dummy database

```json
    {
        "users": [
            {
                "id": 1234123,
                "user_name": "The Writer",
                "first_name": "Tamer",
                "last_name": "Ameen",
                "email": "user1@email.com",
                "articles": [
                    12, 589, 124
                ]
            }
        ],
        "articles": [
            {
                "id": 12,
                "title": "Welcome :..",
                "content": "lorem ipsum test text",
                "views": 142,
                "likes": 12,
                "shares": 2,
                "comments": [
                    {
                        "_id": 6372,
                        "message": "I love this topic :3 love"
                    }
                ]
            },
            {
                "id": 589,
                "title": "Welcome & Hi",
                "content": "lorem ipsum test text lorem ipsum test text",
                "views": 12,
                "likes": 1,
                "shares": 1,
                "comments": [
                    {
                        "_id": 88389,
                        "message": "I love this topic with love again"
                    }
                ]
            },
            {
                "id": 124,
                "title": "Welcome & Hi :...",
                "content": "lorem ipsum test text test again :3 with love again too",
                "views": 87,
                "likes": 11,
                "shares": 0,
                "comments": [
                    {
                        "_id": 73883,
                        "message": "I love this topic"
                    }
                ]
            }
        ]
    }
```

## License

[MIT](https://github.com/danivek/json-api-serializer/blob/master/LICENSE)
