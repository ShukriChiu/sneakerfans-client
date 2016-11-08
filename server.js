var express = require('express'),
    path = require('path'),
    app = express(),
    history = require('connect-history-api-fallback');

app = express();
app.use(history())
app.set('view engine', 'html');
app.use('/', express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 3000;
app.listen(port, console.log('server started:' + port));