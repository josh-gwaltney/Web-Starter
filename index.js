let http = require('http');
let path = require('path');

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let compression = require('compression');
let logger = require('morgan');
let io = require('socket.io');

let port = 3015;

let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {

});