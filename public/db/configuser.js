var mongoose = require('mongoose');

mongodb+srv://admin:admin@cluster0.t44cf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(db_url, { useNewUrlparser: true })
var db_url = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () {console.log('successfully connected to DB')});