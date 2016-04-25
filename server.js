var jsonServer = require('json-server');

var port = 3000;
var server = jsonServer.create();
var router = jsonServer.router('db.json');
server.use(router);
server.listen(port);
console.log('Listening on port ' + port + '...');