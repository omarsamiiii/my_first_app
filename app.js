const http = require('http');
const url = require('url');
const utils = require('./utils');

const PORT = 3000;

// Define routes
const routes = {
    '/': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Welcome to the Home Page! Today's date is ${utils.getCurrentDate()}`);
    },
    '/about': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
    },
    '/contact': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at contact@example.com.');
    },
    '/greet': (req, res) => {
        const query = url.parse(req.url, true).query;
        const name = query.name || 'Guest';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(utils.greetUser(name));
    },
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const routeHandler = routes[parsedUrl.pathname];

    if (routeHandler) {
        routeHandler(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});