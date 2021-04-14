var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var valorA = parseInt(lines.shift());
var valorB = parseInt(lines.shift());

var soma = valorA + valorB;

console.log('X = ' + soma);