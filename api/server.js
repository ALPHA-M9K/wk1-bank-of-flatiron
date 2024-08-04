// Import the JSON Server library
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors)
server.use(middlewares);

// Use JSON Server's rewriter to customize routes
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));

// Use the router to handle API routes
server.use(router);

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('JSON Server is running');
});

// Export the server instance
module.exports = server;

