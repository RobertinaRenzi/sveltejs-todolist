var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});
app.listen(8080);
console.log('Server running on port 8080');
