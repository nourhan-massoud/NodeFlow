const fs = require('node:fs');

const folderPath = '/var/www/NodeFlow';

// file_system.readdir(folderPath, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     })
// });

// fs.readdir(folderPath, (err, files) => {
//     files.forEach(function(file) {
//         console.log(file);
//         file_path = folderPath + '/' + file;
//         fs.readFile(file_path , 'utf8' , (err,data) => {
//             console.log(data);
//         })
//     })
// });

// var filePath = folderPath + '/package.json';
// // hna by7sl wait
// // y3ni al console.log msh ht7sl 8er lma al file ytl3

// var content = fs.readFileSync(filePath , 'utf8');
// console.log(content);

var user = require("./user");
console.log(user.getUserName())
console.log(user.getAge())

console.log("hi")