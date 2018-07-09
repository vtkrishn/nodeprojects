const fs = require('fs');
const zlib = require('zlib');

var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('output.txt');

read.pipe(write);

console.log('program ended');

console.log('---------');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('file compressed');

console.log('---------');

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input_decompress.txt'));

console.log('file decompressed');





