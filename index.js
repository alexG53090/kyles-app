var express = require('express');
var app = express();

var people = ['ghandi', 'willie nelson', 'speaker knockerz'];

app.use(express.static('./views'))



// app.get('/coolness', function(request, response){
//   response.sendFile(__dirname + '/views/index.html')
// })

app.get('/api', function(request, response){
  response.send(people)
})

app.post('/:id', function(request, response){
  people.push(request.params.id);
  response.status(201).send(people)
})

app.listen(8080, function(){
  console.log('you are locked into port 8080')
})
