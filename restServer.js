var express = require('express');
var app = express();

var fs = require('fs');

var server = app.listen(8080, ()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('server listening ar http://' + host + ':' + port);
});

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
};


app.get('/listUsers', (req, res) => {
    fs.readFile('users.json', (err,data) => {
        if(err) throw err;
        console.log(data);
        res.end(data);
    });
});

app.post('/addUsers', (req, res) => {
	fs.readFile('users.json', (err, data) => {
		if(err) throw err;
		data = JSON.parse(data);
		data['user4'] = user['user4'];
		res.end(JSON.stringify(data));
	});
});

app.get('/:id', (req, res) => {
	fs.readFile('users.json', (err, data) => {
		if(err) throw err;
		var users = JSON.parse(data);
		var value = users['user' + req.params.id];
		console.log(value);
		res.end(JSON.stringify(value));
	});
});

app.delete('/deleteUser' , (req, res) => {
	fs.readFile('users.json', (err, data) => {
		if(err) throw err;
		data = JSON.parse(data);
		delete data['user' + 2];
		console.log(data);
		res.end(JSON.stringify(data));
	});
});
