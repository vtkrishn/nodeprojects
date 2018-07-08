var buff = new Buffer(10);
for(var i = 0;i<buff.length;i++){
	buff[i] = i+27;
	console.log(buff[i]);
}

//buffer extract for character
var bufString = new Buffer("String is Good");
for(var i = 0;i<bufString.length;i++){
	console.log(String.fromCharCode(bufString[i]));
}

//buffer limits
var bufStringLimit = new Buffer(8);
bufStringLimit.write("String is Good Again");
console.log(bufStringLimit.toString());

//json
var buffStringJSON = new Buffer(10);
buffStringJSON.write("Inform");
console.log(buffStringJSON.toJSON());


//concatenation
var buff1 = new Buffer("Tutorial1");
var buff2 = new Buffer("Tutorial2");
console.log(Buffer.concat([buff1, buff2]));
console.log([buff1.toString('ascii'), buff2.toString('utf8')]);

//copy
var temp = new Buffer(buff1.length);
buff1.copy(temp);

buff2.copy(buff1); // copies buffer2 content to buffer1 - Tutorial2 will be copeied to buff1
console.log("Buff1 : " + buff1.toString('ascii'));

temp.copy(buff1);
console.log("Restored from Temp , Buff1 : " + buff1.toString('ascii'));

//slice
console.log(buff1.slice(0,2).toString('ascii'));
