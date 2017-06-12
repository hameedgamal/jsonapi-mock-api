const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

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


router.render = (req, res) => {
    if (req._parsedUrl.pathname === "/users") {
        Serializer.serializeAsync('users', res.locals.data)
        .then((result) => {
            res.jsonp(result);
        });

    }

    if (req._parsedUrl.pathname === "/articles") {
        Serializer.serializeAsync('articles', res.locals.data)
        .then((result) => {
            res.jsonp(result);
        });
    }
};

// Add headers
server.use(middlewares);
server.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Set content type according to JSON API standard
    res.setHeader('content-type', 'application/vnd.test+json');

    // Pass to next layer of middleware
    next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log(`
        mock APIs Server is running

        Open http://localhost:3000/
    `);
});
