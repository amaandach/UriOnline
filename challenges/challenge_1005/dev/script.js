const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valueA = parseFloat(lines.shift())
const valueB = parseFloat(lines.shift())

const MEDIA = ((valueA * 3.5) + (valueB * 7.5)) / 11

console.log(`MEDIA = ${MEDIA.toFixed(5)}`)