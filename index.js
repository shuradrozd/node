const http = require('http');
const fs = require('fs');
const url = require('url');
const server = new http.Server;

server.listen('8082', '127.0.0.1');

server.on('request', (req,res) =>{
    const getParseUrl = url.parse(req.url, true).pathname;
    fs.readFile(getPageNameByUrl(getParseUrl)+ '.html', (err, data) => {
       if (err) throw new Error(err);
        res.end(data);
});
});


function getPageNameByUrl(path) {
    switch(path) {
        case '/':
        case '/home':
            return 'home';
        break;
        case '/about':
            return 'about';
            break;
        default:
            return 'error';
    }
}
