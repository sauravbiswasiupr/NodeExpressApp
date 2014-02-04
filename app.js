var express = require("express");
var app = express();

//add some http routes like GET, POST 
app.get('/', function(request,response) {
  response.sendfile('./views/index.html');
});

app.get('/about', function(req,res) {
  res.sendfile('./views/saurav.html');
});


app.listen(3000);
