const http = require('http');

const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 3002;

const server = http.createServer(app);

server.listen(PORT,() => {
    console.log(`Server ${PORT} portunda çalışıyor.`)
});