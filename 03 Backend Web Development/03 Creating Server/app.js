const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Home Page")
    }

    if (req.url == "/about") {
        res.end("This is an about page:>");
    }

    if (req.url == "/profile") {
        res.end("This is an profile page:>");
    }

})

server.listen(3000);

// npx nodemon .\app.js
