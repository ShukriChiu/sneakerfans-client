var express = require('express');
var path = require('path');
app = express();
app.use('/dist', express.static('dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started:' + port);