const http = require('http');
const formidable = require('formidable');
const fs = require('fs');


http.createServer( (req, res) => {

	if(req.url == '/fileupload'){
		var form = new formidable.IncomingForm();
		form.parse(req, (err, fields, files) => {
			var oldpath = files.filetoupload.path;
			var newpath = files.filetoupload.name;
			fs.rename(oldpath, newpath, (err) => {
				if(err) throw err;			
				res.write('File Uploaded');
				res.end();
			});
		});
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data" >');
		res.write('<input type="file" name="fileupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		res.end();
	}
}).listen(8080);




