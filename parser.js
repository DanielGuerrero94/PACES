#!/usr/bin/node
var fs = require('fs');
var util = require('util');
const log = console.log
const [,, flag, value] = process.argv
var separator = ';'

if (flag == '--help') {
  log('Parser')
}

if (flag == '--version') {
  log('Parser')
}

if (flag == '--name') {
  log(value)
}

if (flag == '--separator') {
  separator = value
}

function isList(string) {
	return string.includes(',')
}

function makeList(string) {
	let regex = /\"/g
	return string.replace(regex, '').split(',')
}

const read = new Promise((resolve, reject) => {
  fs.readFile(process.cwd() + "//contactos.csv", function (err, data) {
    if (err) reject(err)


    var values = data.toString().split('\n');
    //The first row contains the keys so i have to remove it 
    var keys = values.shift().split(separator)
    var keysLength = keys.length;
    values = values.map((value) => {
      splited = value.split(separator)
      let json = {};
      for (let i = 0; i < keysLength; i++) {
	let value = splited[i]
	if (value == undefined) continue
	if (isList(value)){
		console.log('Is a list')
		value = makeList(value)
	}
        json[keys[i].trim()] = value;
      }
      return json;
    });

    resolve(JSON.stringify(values))
  });
})

read.then((json) => {
  fs.writeFile('contactos.json', json, (err) => {
    if (err) throw err;
    console.log('The json file has been saved');
  });
}).catch(log)
