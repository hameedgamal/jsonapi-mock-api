# Mock RESTful Api server
A RESTful Api following JSON:api (A SPECIFICATION FOR BUILDING APIS IN JSON) using Node.js

## built using
- Node.js
- Yarn || npm
- json-server
- json-api-serializer

## Installation
```bash
$ yarn install
```

## usage
this project is built on top of [json-server](https://github.com/typicode/json-server) & [json-api-serializer](https://github.com/danivek/json-api-serializer), you can refer to those projects documentation to find out how you can customize it for your need.

`server.js` file is the main file that contains the setup following [this section](https://github.com/typicode/json-server#module) of json-server documentation

### example how you can register your resources types
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

`db.json` that file contains a json object that represent the dummy database

## License

[MIT](https://github.com/danivek/json-api-serializer/blob/master/LICENSE)
