var express = require('express'),
    path = require('path'),
    app = express();

app = express();
app.use('/dist', express.static('dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
var port = process.env.PORT || 3000;
app.listen(port, console.log('server started:' + port));