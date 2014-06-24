var http = require('http');
http.createServer(function (req, res) {
    // 200 betyr ok på internett (eller, http, da)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Vi er da for f@€n ikke kids!!! \n');
}).listen(process.env.port);
