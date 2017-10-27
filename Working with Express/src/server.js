// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = 8080;

var router = express.Router();

router.post('/process_post', function(req,res){
    console.log('username is '+ req.body.username);
    console.log('password is '+ req.body.password);
    var data = {username: req.body.username, password: req.body.password};
    res.json(data);
})


app.use('/api', router);

app.listen(port, function(){
    console.log('Listening on port ' + port);
});

