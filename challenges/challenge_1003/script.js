const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const valueA = parseInt(lines.shift())
const valueB = parseInt(lines.shift())

const soma = valueA + valueB

console.log(`PROD = ${soma}`)