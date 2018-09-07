const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var cors = require('cors');
const app = express();
var routes = require('./routes/index');
var secrets = require('./config/secrets');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.static(__dirname + "/html"));
app.use('/js',express.static(__dirname + '/assets/js'));
app.use('/css', express.static(__dirname + '/assets/css'));
app.use("/image", express.static(__dirname + '/assets/img'));

app.use('/', routes);

app.listen(secrets.port, () => console.log(`Server started on port ${secrets.port}`));
