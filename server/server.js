//Set up
var logger = require('morgan'),
    cors = require('cors'),
    http = require('http'),
    express = require('express'),
    errorhandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    helmet = require('helmet'),
    config = require('./config.json');

var app = express();
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorhandler());
}

var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('Not connected to database ' + err);
        throw err;
    } else {
        console.log('Successfully connected to mongoDB');
    }
});

app.use(require('./app/routes/user_routes'));
app.use(require('./app/routes/ceiba_data_routes'));
app.use(require('./app/routes/pv_device_routes'));
app.use(require('./app/routes/ceiba_aux_variables_routes'));

http.createServer(app).listen(port, function (err) {
     console.log('listeing in http://localhost:' + port);
 });