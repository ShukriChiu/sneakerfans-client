var express = require('express'),
    path = require('path'),
    app = express()

app = express();
app.set('view engine', 'html');
app.use('/', express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 3000;
app.listen(port, console.log('server started:' + port));