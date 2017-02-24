/**
 * Created by loutao on 2017/2/24.
 */

var https = require('https');
var fs = require('fs');

var privateKey  = fs.readFileSync('./challenget.win.key', 'utf8');
var certificate = fs.readFileSync('./2_challenget.win.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, function (req, res) {
    res.writeHead(200);
    res.end('<h1>Hello Https</h1>');
});
var SSLPORT = 443;

httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});