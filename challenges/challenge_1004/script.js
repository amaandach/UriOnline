const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const firstValue = parseInt(lines.shift())
const secondValue = parseInt(lines.shift())

const times = firstValue * secondValue

console.log(`PROD = ${times}`)